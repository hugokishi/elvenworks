## About

This repository is dedicated for one challenge by Elven Works.
The system was built with React (Front) and Node.js (Backend).

## Installation
  ```sh
  https://github.com/hugokishi/elvenworks
  ```
  After the git clone, run in folder server/web :
  ```sh
  npm install or yarn
  ```
  
To run the server and the site run a ``` npm start or yarn start ``` in the web/server folders
  
## Api Reference


## GET: /resources

Returns all resources registered in the bank

#### Request URL

> http://localhost:3333/resources

#### cURL

```sh
$ curl --request GET \
  --url p://localhost:3333/resources
```

### Response example

<details>
<summary>200 OK</summary>

```js
{
  "id": "1",
  "name": "My Name",
  "type": "My Type",
  "createdAt": "My Time",
  "updatedAt": "My Time"
}
```

</details>

<details>
<summary>404 Not found</summary>

```js
{
  "message": "Detalhes do erro"
}
```

</details>

<details>
<summary>500 Internal Server Error</summary>

```js
{
  "message": "Detalhes do erro"
}
```

</details>
