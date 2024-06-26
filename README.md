<div align="center"><img src="./assets/img.png" width="150px"></div>
<br />
<div align="center">
  <h1 align="center">POF</h1>
  <p align="center">
    <a href="./assets/Progetto Node.js di Samuele Furnari.pdf">Presentation IT</a>
  </p>
</div>

## Introduction

Planty of Food (POF) is an agency that aim to make plant based foods more accesseble, especially thanks to its purchasing groups. Their platform is separete from the e-commerce and my mission for this project is to create an RESTful JSON API that will allows to manage these purchasing groups.

## Requirements

The API must allow the insertion, modification and deletion of various entities, including products sold, users records and sales orders. Each of these entities have specific attributes like name's product, name, last name and email of the users and the composition of products and users for each order. Functions will need to be implemented to view all orders, with the possibility of filtering them by date of entry and the products they contain. The API must follow the REST standards, including naming, the correct use of HTTP methods and good management of response status codes. We have the flexibility to choose between to using a relational database like MySQL or a NoSQL database like MongoDb to store information.

## Installation

To install and test this project, follow these steps:

1. Clone the repository: `https://github.com/samuelefrni/RESTful-API.git`
2. Install the dependencies: `npm install`
3. Create a .env file with two variables: `PORT` and `MONGODB`
4. In the `PORT` variable insert the port number of your server
5. In the `MONGODB` variable insert the URI of your database [MongoDB Atlas](<(https://www.mongodb.com/it-it/cloud/atlas/register)>) or [MongoDB Compass](https://www.mongodb.com/try/download/compass)
6. Run: `npm start`
7. Test it: you can use a client for your test like: [Postman](https://www.postman.com/downloads/) or [Insomnia](https://insomnia.rest/download)

## About my choice

### Languages

<p align="left">
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/>
</p>

### Frameworks and libraries

<p align="left">  
  <img src="https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white"/>
  <img src="https://img.shields.io/badge/.ENV-ECD53F.svg?style=for-the-badge&logo=dotenv&logoColor=black"/>
  <img src="https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD"/>
  <img src="https://img.shields.io/badge/Mongoose-880000.svg?style=for-the-badge&logo=Mongoose&logoColor=white"/>
</p>

## RESTful API

#### Product

| Method | Endpoint          | Result                                                   |
| ------ | ----------------- | -------------------------------------------------------- |
| GET    | api/product/:id?  | Show all products or the only one that matches the ID    |
| GET    | api/product?lm=10 | Show products with the limit that you prefer (default 2) |
| GET    | api/product?sk=2  | Show products and skips as many as you want (default 0)  |
| POST   | api/product       | Create a new product                                     |
| PUT    | api/product/:id   | Modify the existing product that matches the ID          |
| DELETE | api/product/:id   | Delete the existing product that matches the ID          |

#### User

| Method | Endpoint       | Result                                                |
| ------ | -------------- | ----------------------------------------------------- |
| GET    | api/user/:id?  | Show all users or the only one that matches the ID    |
| GET    | api/user?lm=10 | Show users with the limit that you prefer (default 2) |
| GET    | api/user?sk=2  | Show users and skips as many as you want (default 0)  |
| POST   | api/user       | Create a new user                                     |
| PUT    | api/user/:id   | Modify the existing user that matches the ID          |
| DELETE | api/user/:id   | Delete the existing user that matches the ID          |

#### Order

| Method | Endpoint        | Result                                                 |
| ------ | --------------- | ------------------------------------------------------ |
| GET    | api/order/:id?  | Show all order or the only one that matche ID          |
| GET    | api/order?lm=10 | Show orders with the limit that you prefer (default 2) |
| GET    | api/order?sk=2  | Show orders and skips as many as you want (default 0)  |
| GET    | api/order?date  | Show orders filtered by date                           |
| POST   | api/order       | Create a new order                                     |
| PUT    | api/order/:id   | Modify the existing order that matches the ID          |
| DELETE | api/order/:id   | Delete the existing order that matches the ID          |

## Usage

### **Product**

You can get the entire list of products or get a specific product with his ID with a `GET` request :

`GET /api/product` or `GET /api/product/:id`

You can add a new product with a `POST` request:

`POST /api/product`

```bash
{
  "name":"product's name"
}
```

You can modify an existing product with a `PUT` request:

`PUT /api/product/:id`

```bash
{
  "name":"new product's name"
}
```

You can delete an existing product with a `DELETE` request:

`DELETE /api/product/:id`

### **User**

You can get the entire list of users or get a specific user with his ID with a `GET` request :

`GET /api/user` or `GET /api/user/:id`

You can add a new user with a `POST` request:

`POST /api/user`

```bash
{
  "name":"user's name",
  "surname":"user's surname",
  "email":"user's email"
}
```

You can modify an existing user with a `PUT` request:

`PUT /api/user/:id`

```bash
{
  "email":"new user's email"
}
```

You can delete an existing user with a `DELETE` request:

`DELETE /api/user/:id`

### **Order**

You can get the entire list of orders or get a specific order with his ID with a `GET` request :

`GET /api/order` or `GET /api/order/:id`

You can also get a specific order with a query :

`GET /api/order?date=YYYY-MM-DD`

You can add a new order with a `POST` request:

`POST /api/order`

```bash
{
  "products":["product's id"],
  "users":["user's id"]
}
```

You can modify an existing order with a `PUT` request:

`PUT /api/order/:id`

```bash
{
  "products":["new product's ID"]
}
```

You can delete an existing order with a `DELETE` request:

`DELETE /api/order/:id`

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Author

- **Samuele Furnari**
  - Email: samuelefurnari9@gmail.com
  - LinkedIn: [Samuele Furnari](https://www.linkedin.com/in/samuele-furnari-a37567220/)
