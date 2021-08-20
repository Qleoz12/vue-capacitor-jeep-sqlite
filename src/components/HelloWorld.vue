<template>
  <div class="hello">
    <h1>Hello World</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { dataToImport } from './import-json';
export default defineComponent({
  setup() {
    const initJeepSqlite = async () => {
      await customElements.whenDefined('jeep-sqlite');
      const jeepSqlite = document.querySelector('jeep-sqlite');
      console.log('jeepSqlite:', jeepSqlite)

      if (jeepSqlite) {
        let result = await jeepSqlite.echo({ value: "Hello World from Jeep" });
        console.log('result:', result)

        if (await jeepSqlite.isStoreOpen()) {
          try {
            let jsonValidRes = await jeepSqlite.isJsonValid({ jsonstring: JSON.stringify(dataToImport)});
            if (!jsonValidRes.result) throw new Error('import json error!')
            let importRes = await jeepSqlite.importFromJson({ jsonstring: JSON.stringify(dataToImport) });
            if (importRes.changes?.changes === -1) {
              throw new Error('import from json fail!')
            } else {
              console.log('import from json success: %s', JSON.stringify(importRes));
            }

            await jeepSqlite.createConnection({
              database: "test",
              version: 1
            })

            const isDBOpen = await jeepSqlite.isDBOpen({ database: "test" });
            console.log('isDBOpen: ', isDBOpen);

            await jeepSqlite.open({ database: "test" });

            let ret = await jeepSqlite.query({ database: "test", statement: "SELECT * FROM users;" });
            console.log('test db query result: %s', JSON.stringify(ret));

          } catch (error) {
            console.log('error:', error);
          }
        }
      } else {
        console.log('jeepSqlite is null!!!');
      }
    }

    initJeepSqlite();
  },
})
</script>

