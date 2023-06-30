# Ongame Forum

## After cloning the repository you must follow these steps:

#### 1. You must create an .env file, copy the variables in .env.example to the .env and set values.
#### 2. You must run "docker-compose up", this will basically start backend, first postgres and then django API.
#### 3. You must access the frontend folder and run "npm run dev"(this will install the necessary packages), then run "npm run dev"(this will start app in localhost).

###### (Now i will explain why the frontend is not running with docker. This happens because the application was developed in a windows environment, there are some alternatives to fix this problem and some have been tried but still without success. The frontend is still unable to be dockerized. Maybe youve been more successful than me)

#### 4. While docker compose started an admin user was created in the db. You must login as admin user (username: admin@admin.com, password: admin) and create categories as only an admin can create them and a topic cannot be created without a category.

#### 5. You are now ready to test app.
