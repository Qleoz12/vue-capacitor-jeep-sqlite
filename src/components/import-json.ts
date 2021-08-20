export const dataToImport: any = {
	database: "test",
	version: 1,
	encrypted: false,
	mode: "full",
	tables: [
		{
			name: "users",
			schema: [
				{ column: "id", value: "INTEGER PRIMARY KEY NOT NULL" },
				{ column: "email", value: "TEXT UNIQUE NOT NULL" },
				{ column: "name", value: "TEXT" },
				{ column: "age", value: "REAL" },
				{ column: "last_modified", value: "INTEGER" }
			],
			indexes: [
				{ name: "index_user_on_name", value: "name" },
				{
					name: "index_user_on_last_modified",
					value: "last_modified DESC"
				},
				{
					name: "index_user_on_email_name",
					value: "email ASC, name",
					mode: "UNIQUE"
				}
			],
			values: [
				[1, "Whiteley.com", "Whiteley", 40.5, 1582536810],
				[2, "Jones.com", "Jones", 44.2, 1582812800],
				[3, "Simpson@example.com", "Simpson", 69, 1583570630],
				[4, "Brown@example.com", "Brown", 15, 1590383895]
			]
		},
		{
			name: "messages",
			schema: [
				{ column: "id", value: "INTEGER PRIMARY KEY NOT NULL" },
				{ column: "title", value: "TEXT NOT NULL" },
				{ column: "body", value: "TEXT NOT NULL" },
				{ column: "last_modified", value: "INTEGER" }
			],
			values: [
				[1, "test post 1", "content test post 1", 1587310030],
				[2, "test post 2", "content test post 2", 1590388125]
			]
		}
	]
};

export const partialImport: any = {
	database: "local-data",
	version: 1,
	encrypted: false,
	mode: "partial",
	tables: [
		{
			name: "users",
			values: [
				[5, "Addington.com", "Addington", 22, 1590388335],
				[6, "Bannister.com", "Bannister", 59, 1590393015],
				[2, "Jones@example.com", "Jones", 45, 1590393325]
			]
		},
		{
			name: "messages",
			indexes: [
				{ name: "index_messages_on_title", value: "title" },
				{
					name: "index_messages_on_last_modified",
					value: "last_modified DESC"
				}
			],
			values: [
				[1, "update => test post 1", "hello world", 1590396146],
				[3, "add => test post 3", "content test post 3", 1590396146],
				[4, "add => test post 4", "content test post 4", 1590396288]
			]
		}
	]
};
