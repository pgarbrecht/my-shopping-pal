# My Shopping Pal
## Project Description
A fullstack MongoDB, Express, Node, and EJS app created by Phil Garbrecht that allows users to create a list of items to buy for their shopping trip and then check off the items as they buy them at the store. Utilizes encryption (bcrypt) and authorization + and authentication (express session) to protect the user's shopping data.

## Project Links
* Link to GitHub Repository (Backend + Frontend): https://github.com/pgarbrecht/my-shopping-pal
* Link to Deployed Application: https://my-shopping-pal.herokuapp.com/

## Technologies Used
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![EJS](https://img.shields.io/badge/ejs-%2320232a.svg?style=for-the-badge&logo=ejs&logoColor=%2361DAFB) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)

## Approach Taken
I began by setting up backend functionality: the server, the item functionality (Model including the Mongoose schema for items in the MongoDB collection + the items controller to handle CRUD requests). Then I built out the views using EJS, which is a Javascript templating tool that generates HTML, and styled using CSS with careful attention to responsiveness since this app needs to be used equally on desktop + mobile. After completing this MVP functionalty, I proceeded to set up the model, controller, and views for users to login and access their data, then added authoriation requirements on routes and updated the index view to only render items that matched the username of the current user in the session (at time of creating an object a hidden input is used to capture the username and add that as a property to the item stored in the database, which we can then check for).

## Unsolved Problems
I solved for all of my MVP problems and added the stretch goal of user login.

## User Stories
As a user, I am a busy person who needs to make sure I get everything I need for the week in one trip. As such I want:
* To be able to quickly add items to the list so that I save time
* To be able to update items and add more notes so that I can remember specific things
* To be able to see and remove my items from the same page so that I save time

### Stretch goal user stories
* To have a user account so I can plan items on my desktop then log in again on my phone to check them off (i.e my data persists between sessions I use the app).
* To have my login information encrypted for protection and ensure no other users can see my data

## Additional Notes
* I enjoyed building this app and often use it myself for my shopping trips. Please feel welcome to create an account and use it yourself as well!