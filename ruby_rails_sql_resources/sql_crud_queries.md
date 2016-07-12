# SQL Practise

![](http://kaede.jp/wp/wp-content/uploads/2015/09/postgresql_logo.jpg)

### Learning Objectives
1. Practice creating a database from the command line
2. Practice creating an SQL schema
3. Practise seeding an SQL database
4. Practice querying a database using SQL


#1. CREATION
- Open up the psql server by typing `psql` in terminal
- Make a database called 'realty' with `CREATE DATABASE realty;`
- You can check if this has worked by typing `\l`, and you will get a list of your databases
- Exit the psql server with `\q`


#2. SCHEMA 

In your homework folder, touch an SQL file called `schema.sql`. Create a schema based off the following ERD. 

Note: VARCHAR is a text type that is character-limited, typically up to 255.   
(See below for create table SQL syntax).


- apartments should have:
  - id - serial primary key
  - tenant - varchar

- offices should have:
  - id - serial primary key
  - sq_ft - integer
  - cubicles - integer
  - bathrooms - integer
  - company - varchar

- storefronts should have:
  - kitchen - boolean
  - sq_ft - integer
  - outdoor_seating - boolean
  
    
  Your create table syntax will look something like:

  ```
  CREATE TABLE apartments (
    id SERIAL PRIMARY KEY,
    tenant VARCHAR(255)
  );
  ```

  Etc. You can create multiple tables in the same .sql file.
  
  From the command line load the schema `schema.sql` into the database:
  - Go into the directory where `schema.sql` is located.
  - In terminal, NOT in the the psql server, type `psql -d realty < schema.sql`
  This tells the database (-d) called realty to 'eat' the contents of schema.sql.

  You can check if this has worked by going into your psql server and connecting
  to the realty database with `\c realty`. The `\c` command is used to connect to any database you have stored in psql.
  
  Now type `\dt` and you should see a list of the tables you have created. 
  
  To see a list of your columns in a table, for example the apartment table, type `SELECT * FROM apartments`
  
  Quit psql again with `\q`


#3. SEED

- Create a new file called `seed.sql`, and in this file you should  
  - **Practise writing the proper INSERT commands that will add new entries into your apartment, office and storefront tables.** You should create at least 3 entries for each table. Vary the attributes of each entry so no two are alike.
  
  </br>    
- From the command line, load this seed file into your database. In the directory where your seed file is located, type the same command as before but substitute the
schema.sql for seed.sql: `psql -d realty < seed.sql`. You should see a list of INSERTs.


#4. CRUD

Perform these operations from the `psql` command line

  - Practice editing tables
    - Change the tenant of an apartment
    - Change the number of bathrooms in an office
  - Practice deleting entries
  	- delete the storefront with the lowest square footage
  	- delete the office with the most cubicles
  - Practise more inserts
    - add a storefront that has outdoor seating
    - add an office with ten bathrooms


#5. QUERIES
Create a new markdown file `realty.md` and write the SQL commands you would use to retrieve the following information from your database. Test each command in PSQL to make sure it is correct:

- The average square footage of all offices
- The total number of apartments
- The apartments where there is no tenant
- The names of all of the companies
- The number of cubicles and bathrooms in the 3rd office
- The storefronts that have kitchens
- The storefront with the highest square footage and outdoor seating
- The office with the lowest number of cubicles
- The office with the most cubicles and bathrooms combined

W3 schools has good guides for sql commands along the left sidebar: http://www.w3schools.com/sql/default.asp

