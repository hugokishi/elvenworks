## About

This repository is dedicated for one challenge by Elven Works.
The system was built with React (Front) and Node.js (Backend).

## Installation
  ```sh
  https://github.com/hugokishi/elvenworks
  ```
  After the git clone, run in folder server and web :
  ```sh
  npm install or yarn
  ```
  
To run the server and the site run a ``` npm start or yarn start ``` in the web and server folders
Note: after run ```npm install or yarn``` run ```npx sequelize db:migrate or yarn sequelize db:migrate``` for run and create database.

## React Front-End Url

> http://localhost:3000
  
  
## Api Reference

## GET: /resources

Returns all resources registered in the bank

#### Request URL

> http://localhost:3333/resources


## Post: /resources

Register resources in the bank

| Param  | Param Type | DataType  | Required |
| ------ | ---------- | --------- | -------- |
| name   | body       | string    | **yes**  |
| type   | body       | string    | **yes**  |

#### Request URL

> http://localhost:3333/resources

## Delete: /resources/:id

Delete one resource in the bank

| Param  | Param Type | DataType  | Required |
| ------ | ---------- | --------- | -------- |
| id     | query      | number    | **yes**  |


#### Request URL

> http://localhost:3333/resources/:id


## Post: /resources/:id

Update the resource

| Param  | Param Type | DataType  | Required |
| ------ | ---------- | --------- | -------- |
| id     | query      | number    | **yes**  |
| name   | body       | string    | **yes**  |
| type   | body       | string    | **yes**  |

#### Request URL

> http://localhost:3333/resources/:id
