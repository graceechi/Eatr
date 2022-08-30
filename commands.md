Set up database and user

psql postgres
CREATE USER flavr_app WITH PASSWORD 'xyz' CREATEDB;
CREATE DATABASE flavr_db WITH OWNER flavr_app;

    If need to drop database:
        DROP DATABASE flavr_db;
        CREATE DATABASE flavr_db WITH OWNER flavr_app;

CREATE MODELS
npx sequelize-cli model:generate --name Photos --attributes userId:integer,imageUrl:text,caption:string,favesCount:integer

    npx sequelize-cli model:generate --name Comments --attributes userId:integer,photoId:integer,comment:string

    npx sequelize-cli model:generate --name Faves --attributes userId:integer,photoId:integer

CREATE SEEDER FILES
npx sequelize seed:generate --name Photos
npx sequelize seed:generate --name Comments
npx sequelize seed:generate --name Faves

Seeders for Photos
{ userId: imaageUrl: caption: favesCount: }

Seeders for Comments
{ userId: photoId: comment: }

Seeders for Faves
{ userId: photoId: }

Make sure .env file is in backend root and migrate and seed.
npx dotenv sequelize db:migrate
npx dotenv sequelize db:seed:all

OR SEED EACH SEEDER FILE INDIVIDUALLY
npx sequelize-cli db:seed --seed 20220526204024-demo-user.js
npx sequelize-cli db:seed --seed my-seeder-file.js
npx sequelize-cli db:seed --seed my-seeder-file.js
npx sequelize-cli db:seed --seed my-seeder-file.js

If you need to reseed data
npx dotenv sequelize db:seed:undo:all
npx dotenv sequelize db:migrate:undo:all
npx dotenv sequelize db:migrate
npx dotenv sequelize db:seed:all

-----Steps:-----
Create raves routes in routes/api

Create photos.js in store, create a home component, and implement component to App.js in src file.

Create Routes

Create Thunk Action Creators and Reducers

Create Components

Render Components in App or other Components

-----HEROKU-----
heroku login
git push heroku main

heroku run npm run sequelize db:seed:undo:all
heroku run npm run sequelize db:migrate:undo:all
heroku run npm run sequelize db:migrate
heroku run npm run sequelize db:seed:all

Created custom scripts

Reseed backend In backend root, npm run reseed
Reseed Heroku In main root of project, npm run heroku-reseed
