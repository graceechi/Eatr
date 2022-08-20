# Flavr
[Flavr](https://flavr.herokuapp.com/), inspired by <a href="https://flickr.com/" target="_blank">Flickr</a>, is a platform where foodies can share their food photography and interests. 

![Screen Shot 2022-06-05 at 11 39 17 AM](https://user-images.githubusercontent.com/90019010/172060993-934afa64-88da-4a77-bb90-24599df673f4.png)

## Technologies Used
#### Front End
![react](https://user-images.githubusercontent.com/90019010/179418431-3768ece7-d988-43f1-a22b-4707848ac9d2.svg)
![redux](https://user-images.githubusercontent.com/90019010/179418433-e3ae4f1d-a1dc-4772-84b7-56db8132d01e.svg)
![javascript](https://user-images.githubusercontent.com/90019010/179418437-d00f3585-d6a9-4531-af2f-e5cb321e2780.svg)
![node](https://user-images.githubusercontent.com/90019010/179418558-6d4f59d8-7449-4c32-a30f-5880f91674d7.svg)
![html](https://user-images.githubusercontent.com/90019010/179418445-20d38d75-eae7-4bbf-bed0-5c26ec4aa977.svg)
![css](https://user-images.githubusercontent.com/90019010/179418447-fd17f92e-83e6-4e60-b4d6-602b8300bdc9.svg)
![heroku](https://user-images.githubusercontent.com/90019010/179418448-91d1d47f-1184-440a-bcd0-03f36192f775.svg)

#### Back End
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
- AJAX
- CSURF
- Express Validator

## How To Launch
1. Download or clone this repository
2. Install dependencies
3. Create a .env file based on the .env.example
4. In root terminal psql, create a user and database based on your .env
5. In backend terminal, migrate and seed the database
6. Run both the frontend and backend servers in 2 terminals simultaneously with `npm start`

## Key Features
- Users can view, upload, edit, and delete photos
- Users can view, create, and delete comments
- User profile page contains their photostream
- Log in, sign up, upload, edit, and delete forms use modals
- AJAX is used to render elements asynchronously
- App authenticates users with validation forms and prevents CSRF attacks

### Explore Page
- Image gallery of all photos uploaded by all users

![explore-page](https://user-images.githubusercontent.com/90019010/182533122-07992e4f-cc2f-4418-9776-1e249c9e46b6.png)

### User Profile Page
![user-profile](https://user-images.githubusercontent.com/90019010/172035285-f4b148b7-cae1-4615-9bc3-287231fadaa7.png)
### Single Photo & Comments Page
- Users can edit/delete photos
- Users can comment(and delete their comments) on photos

![photo-comment-pg](https://user-images.githubusercontent.com/90019010/182533267-aa76b8f8-1a69-42b5-ab68-7f6a63eb59ed.png)

### Upload Photo
![upload-photo](https://user-images.githubusercontent.com/90019010/182533315-d49a4430-e6ad-4b62-87d3-92f94cd4050b.png)

### 404 Page
![Screen Shot 2022-06-04 at 11 54 55 PM](https://user-images.githubusercontent.com/90019010/172035644-068abc13-27a0-454d-a30a-f486a02f0e97.png)
- When users route to a page that does not exist

## Stretch Goals
- [ ] Favorites
- [ ] Albums
- [ ] Tags
