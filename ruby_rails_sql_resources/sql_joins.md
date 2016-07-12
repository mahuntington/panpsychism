# SQL Practise II

![](http://kaede.jp/wp/wp-content/uploads/2015/09/postgresql_logo.jpg)

```
- one-to-many relationship between two models
- using foreign keys 
- table joins: joining tables at foreign keys
``` 
	


##Objectives
  - Practice setting up a one-to-many relationship using foreign keys
  - Practise returning tables joined by foreign key


##Schema - one-to-many

We are going to relate two models: `users` and `regions`, for a potential meetup app

  - Create a database, call it `meetup_app`
  - Create a `users` table. Make it either in a `schema.sql` file or straight into the psql command line. Each `user` should have:
    - id
    - name
    - region_id
  
In the future, we would want our users to be able to subscribe to a regional group so they can see all the other users in their area. In this case, we want each user only to be associated with one region at a time. This is a **one-to-many** relationship, where:

```
*many* users belong to *one* region.
```

```
*one* region has *many* users.
``` 

</br>
NOTE: There are a few basic data relationships used extensively in Rails applications, such as **one-to-many** and also **many-to-many**. 

Here is a good overview of SQL relationships including joins:   
http://code.tutsplus.com/articles/sql-for-beginners-part-3-database-relationships--net-8561

In a **one-to-many** relationship, the foreign key lives in the **many**. In this case, `users` is the **many**, because **many** users belong to **one** `region`.

You might notice that the `users` schema has a `region_id`. This is the foreign key. It will be a number: the id of the region to which the user belongs.

</br>

```
CONCEPTUAL QUESTION:

Why is it that the foreign key lives in the many? Would it make sense to put the foreign key in the one?
```

  - Create a `regions` table. Each region should have
    - A unique ID
    - A name
    - A radius in miles

```
CONCEPTUAL QUESTION:
    
**NOTE:** the `regions` table has nothing to associate any users with it. Why do we not need anything here to relate or 'store' users?
```

If you put your schemas into a `schema.sql` file, run it with `psql -d meetup_app < schema.sql`.
    

## Seed

- In a regionseed.sql file, write the INSERTS for three different `regions`. Alternatively, write the INSERTS straight into the psql command line. If you made a file, run it with `psql -d meetup_app < regionseed.sql`

Test that your regions have been seeded.

- In a userseed.sql file, write the INSERTS for seven different `users`. Alternatively, write the INSERTS straight into the psql command line. The `region_id` will correspond to the id of one of the previously created regions. You check the region ids by just selecting the regions in psql: `SELECT * FROM regions;`

Test that your users have been seeded.


    
## Join Queries
    
- Select all the regions and join to the regions all associated users. `SELECT * FROM regions . . . `

EXAMPLE RESULT:

```
 id |      name      | radius | id |   name    | region_id 
----+----------------+--------+----+-----------+-----------
  1 | Alpha Centauri |   8000 |  1 | Mork      |         1
  1 | Alpha Centauri |   8000 |  2 | Mindy     |         1
  2 | Procyon        |  20000 |  3 | AlphaGo   |         2
  2 | Procyon        |  20000 |  4 | Lee Sedol |         2
  2 | Procyon        |  20000 |  5 | Alvin     |         2
  3 | Black Hole     |    600 |  6 | Theodore  |         3
  3 | Black Hole     |    600 |  7 | Simon     |         3
(7 rows)
```

- Refine your result so that you don't get the user's id and region_id displayed. You just want the region id, region name, region radius, and user name.

EXAMPLE RESULT:

```
 id |      name      | radius |   name    
----+----------------+--------+-----------
  1 | Alpha Centauri |   8000 | Mork
  1 | Alpha Centauri |   8000 | Mindy
  2 | Procyon        |  20000 | AlphaGo
  2 | Procyon        |  20000 | Lee Sedol
  2 | Procyon        |  20000 | Alvin
  3 | Black Hole     |    600 | Theodore
  3 | Black Hole     |    600 | Simon
(7 rows)
```

- Now we have two columns called `name`. Refine the result further using an alias. Do the same query you did before, but this time, use AS to change the user's `name` column to `user`.

EXAMPLE RESULT:

```
 id |      name      | radius |   user    
----+----------------+--------+-----------
  1 | Alpha Centauri |   8000 | Mork
  1 | Alpha Centauri |   8000 | Mindy
  2 | Procyon        |  20000 | AlphaGo
  2 | Procyon        |  20000 | Lee Sedol
  2 | Procyon        |  20000 | Alvin
  3 | Black Hole     |    600 | Theodore
  3 | Black Hole     |    600 | Simon
(7 rows)
```

## BONUS
- Find all regions that have more than 1 user
- Find all regions with a radius of more than 1000 and less than 3 users
    
</br>
</br>
