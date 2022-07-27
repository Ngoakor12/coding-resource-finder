# Coding resource finder api
Express API for [coding-resource-finder](https://github.com/Ngoakor12/coding-resource-finder)

## Swagger api documentation
http://localhost:2856/api/docs

## Api Details

method | endpoint | params | description | return type
--- | --- | --- | --- | ---
POST | /all/projects | - | Get all projects | Object
POST | /all/projects/{page} | Page number | Get a page of projects | Object
POST | /all | - | Get all resources | Object
POST | /all/{page} | Page number | Get a page of resources | Object
POST | /all/topics | - | Get all topics | Object
POST | /all/topics/{page} | Page number | Get a page of topics | Object