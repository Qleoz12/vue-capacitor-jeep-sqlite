import { createApp } from 'vue'
import App from './App.vue'
import { defineCustomElements as jeepSqlite} from 'jeep-sqlite/loader';
jeepSqlite(window);

createApp(App).mount('#app')
