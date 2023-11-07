/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "pcmr79ojnny9wsy",
    "created": "2023-11-06 23:33:12.982Z",
    "updated": "2023-11-06 23:33:12.982Z",
    "name": "nextjsCollection",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "zwb4lopu",
        "name": "title",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "dhvwaszp",
        "name": "content",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("pcmr79ojnny9wsy");

  return dao.deleteCollection(collection);
})
