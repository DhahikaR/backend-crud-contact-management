# User Api Spec

## Register

- Endpoint : POST /api/users

Request Body :

---json
{
"username" : "dani@gmail.com,
"password" : '123456,
"name" : "Dhahika rahmadani"
}

Response Body Success :
---json
{
"Data" : {
"username" : "dani@gmail.com",
"name" : "Dhahika rahmadani"
}
}

Response Body Error :

---json

"errors" : "username already registered"

## Login

Endpoint : POST /api/users/login

Request Body :

---json
{
"username" : "dani@gmail.com,
"password" : '123456
}

Response Body Success :
---json
{
"Data" : {
"token" : "unique-token"
}
}

Response Body Error :

---json

"errors" : "username and password already registered"

## Update

Endpoint : PATCH /api/users/current

Headers :

- Authorization : token

REquest Body :

--json
{
"name" : "Dhahika Rahmadani", // optional
"password" : "new123456" // optional
}

Response Body Success :
---json
{
"Data" : {
"username" : "dani@gmail.com",
"name" : "Dhahika Rahmadani"
}
}

Response Body Error :

---json

"errors" : "value error"

## Get User

Endpoint : GET/ api/users/current

Headers :

- Authorization : token

Response Body Success :
---json
{
"Data" : {
"username" : "dani@gmail.com",
"name" : "Dhahika Rahmadani"
}
}

Response Body Error :

---json

"errors" : "Unauthorized"

## Logout

Endpoint : DELETE api/users/logout

Headers :

- Authorization : token

Response Body Success :

---json
{

"data" : "OK"
}

Response Body Error :

---json

"errors" : "Unauthorized"
