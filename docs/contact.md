# Contact API Spec

## Create Contact API

Endpoint : POST /api/contacts

Headers :

- Authorization : token

Request Body :

'''json
{
"first_name" : "Dhahika",
"last_name" : "Rahmadani",
"email" : "dhahika@gmail.com",
"Phone" : "086748248241"
}

Response Body Success :

'''json
{
"data" :
{
"id" : 1,
"first_name" : "Dhahika",
"last_name" : "Rahmadani",
"email" : "dhahika@gmail.com",
"Phone" : "086748248241"
}
}

Response Body Error :

'''json
{
"errors" : "Data already used by others contact"
}

## Update Contact API

Endpoint : PATCH /api/contacts

Headers :

- Authorization : token

Request Body :

'''json
{
"first_name" : "Dhahika",
"last_name" : "Rahmadani",
"email" : "dhahika@gmail.com",
"Phone" : "086748248241"
}

Response Body Success :

'''json
{
"data" :
{
"id" : 1,
"first_name" : "Dhahika",
"last_name" : "Rahmadani",
"email" : "dhahika@gmail.com",
"Phone" : "086748248241"
}
}

Response Body Error :

'''json
{
"errors" : "Data already used by others contact"
}

## Get Contact API

Endpoint : GET /api/contacts/:id

Headers :

- Authorization : token

Response Body Success :

'''json
{
"data" :
{
"id" : 1,
"first_name" : "Dhahika",
"last_name" : "Rahmadani",
"email" : "dhahika@gmail.com",
"Phone" : "086748248241"
}
}

Response Body Error :

'''json
{
"errors" : "Not Found"
}

## Search Contact API

Endpoint : GET /api/contacts

Headers :

- Authorization : token

Query Params :
-name : Search by first_name or last_name, using like, optimal
-email : Search by email using likes, optional
-phone : Search by phone using like, optional
-page : number of page, default 1
-size : size per page, default 10

Response Body Success :

'''json
{
"data" :
{
"id" : 1,
"first_name" : "Dhahika",
"last_name" : "Rahmadani",
"email" : "dhahika@gmail.com",
"Phone" : "086748248241"
},
{
"id" : 2,
"first_name" : "Dhahika",
"last_name" : "Rahmadani",
"email" : "dhahika@gmail.com",
"Phone" : "086748248241"
},
{
"paging" : {
"page" : 1,
"total_page" : 3,
"total_item" : 30
}
}
}

Response Body Error :

## Remove Contact API

Endpoint : DELETE /api/contacts/:id

Headers :

- Authorization : token

Response Body Success :

'''json
{
"data" : "OK"
}

Response Body Error :

'''json
{
"errors" : "Not Found"
}
