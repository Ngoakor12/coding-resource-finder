# Coding resource finder api
Express API for [coding-resource-finder](https://github.com/Ngoakor12/coding-resource-finder)

## Swagger api documentation
http://localhost:2856/api/docs

## Api Details

method | endpoint | params | description | return type
--- | --- | --- | --- | ---
GET | /all/projects | - | Get all projects | Object
GET | /all/projects/{page} | Page number | Get a page of projects | Object
GET | /all | - | Get all resources | Object
GET | /all/{page} | Page number | Get a page of resources | Object
GET | /all/topics | - | Get all topics | Object
GET | /all/topics/{page} | Page number | Get a page of topics | Object