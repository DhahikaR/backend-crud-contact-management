# Address APi Spec

## Create Address API

Endpoint : POST /api/contacts/:contactId/address

Headers :

- Authorization : token

Request Body :

'''json
{
"street" : "Jalan A",
"city" : "Kota A",
"province" : "Provinsi A",
"cuntry" : "Negara A",
"postal_code" : "Kode Pos"
}

Response Body Success :

'''json
{
"data" : {
"id" : 1,
"street" : "Jalan A",
"city" : "Kota A",
"province" : "Provinsi A",
"cuntry" : "Negara A",
"postal_code" : "Kode Pos"
}
}

Response Body Error :

'''json
{
"errors" : "Data is required"
}

## Update Address API

Endpoint : PATCH /api/contacts/:contactId/address/:addressId

Headers :

- Authorization : token

Request Body :

'''json
{
"street" : "Jalan A",
"city" : "Kota A",
"province" : "Provinsi A",
"cuntry" : "Negara A",
"postal_code" : "Kode Pos"
}

Response Body Success :

'''json
{
"data" : {
"id" : 1,
"street" : "Jalan A",
"city" : "Kota A",
"province" : "Provinsi A",
"cuntry" : "Negara A",
"postal_code" : "Kode Pos"
}
}

Response Body Error :

'''json
{
"errors" : "Data is required"
}

## Get Address API

Endpoint : GET /api/contacts/:contactId/address/:addressId

Headers :

- Authorization : token

Response Body Success :

'''json
{
"data" : {
"id" : 1,
"street" : "Jalan A",
"city" : "Kota A",
"province" : "Provinsi A",
"cuntry" : "Negara A",
"postal_code" : "Kode Pos"
}
}

Response Body Error :

'''json
{
"errors" : "Not Found"
}

## List Address API

Endpoint : GET /api/contacts/:contactId/address

Headers :

- Authorization : token

Response Body Success :

'''json
{
"data" : [
{
"id" : 1,
"street" : "Jalan A",
"city" : "Kota A",
"province" : "Provinsi A",
"cuntry" : "Negara A",
"postal_code" : "Kode Pos"
},
{
"id" : 2,
"street" : "Jalan B",
"city" : "Kota B",
"province" : "Provinsi B",
"cuntry" : "Negara B",
"postal_code" : "Kode Pos"
},

    ]

}

Response Body Error :

'''json
{
"errors" : "Not Found"
}

## Remove Address API

Endpoint : POST /api/contacts/:contactId/address/:addressId

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
