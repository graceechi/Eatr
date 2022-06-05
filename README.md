# Flavr
[Flavr](https://flavr.herokuapp.com/), inspired by <a href="https://flickr.com/" target="_blank">Flickr</a>, is a platform where foodies can share their food photography and interests. 

![Screen Shot 2022-06-05 at 11 39 17 AM](https://user-images.githubusercontent.com/90019010/172060993-934afa64-88da-4a77-bb90-24599df673f4.png)

## Technologies Used
#### Front End
- React
- Redux
- Javascript
- HTML
- CSS
- Hosted on Heroku

#### Back End
- Express.js
- Sequelize.js
- PostgreSQL
- AJAX
- CSURF
- Express Validator

## How To Launch
1. Download or clone this repository
2. Install dependencies
3. Create a .env file based on the .env.example
4. In root terminal psql, create a user and database based on your .env
5. In backend terminal, migrate and seed the database
6. Run both the frontend and backend servers in 2 terminals simultaneously

## Key Features
- Users can view, upload, edit, and delete photos
- Users can view, create, and delete comments
- User profile page contains their photostream
- Log in, sign up, upload, edit, and delete forms use modals
- AJAX is used to render elements asynchronously
- App authenticates users with validation forms and prevents CSRF attacks

### Explore Page
- Image gallery of all photos uploaded by all users

![explore-page](https://user-images.githubusercontent.com/90019010/172035278-8e4fa5c1-1c91-410f-b4e6-dea48138c94b.png)
### User Profile Page
![user-profile](https://user-images.githubusercontent.com/90019010/172035285-f4b148b7-cae1-4615-9bc3-287231fadaa7.png)
### Single Photo & Comments Page
- Users can edit/delete photos
- Users can comment(and delete their comments) on photos

![photo-comment-page-2](https://user-images.githubusercontent.com/90019010/172035436-3c2c1a01-7dd4-42bf-8d85-d044adf6d48e.png)
### Upload Photo
![upload-photo](https://user-images.githubusercontent.com/90019010/172035291-eda516d7-5792-442f-a7cc-658d1a5e5f53.png)
### 404 Page
![Screen Shot 2022-06-04 at 11 54 55 PM](https://user-images.githubusercontent.com/90019010/172035644-068abc13-27a0-454d-a30a-f486a02f0e97.png)
- When users route to a page that does not exist

## Stretch Goals
- [ ] Favorites
- [ ] Tags
- [ ] Search
