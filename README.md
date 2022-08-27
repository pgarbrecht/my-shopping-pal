## My Shopping Pal
[View live on Heroku](https://my-shopping-pal.herokuapp.com/)

<hr>

## Project Description
General App Idea/Purpose: An application that can be used to create a list of items to buy for your shopping trip and then check off the items as you buy them at the store. 
<br />

## Models including field names and their datatypes
Will have an items.js file in models with the following schema: <br />
 const itemSchema = new mongoose.Schema({ <br />
	name:  { type: String, required: true }, <br />
	notes: { type: String, required: false, default: 'Click edit item to add notes here' }, <br />
	image: { type: String, required: false, default: '/images/placeholder-item.png' }, <br />
}); <br />

<hr>

 ## List of routes
 GET /list/ provides index page with list of items to buy <br /> 
 NEW /list/new allows to add new item via a form <br />
 POST /list/ saves new item to the database <br />
 SHOW /list/:id shows the details page for an item <br />
 EDIT /list/:id/edit give s form to edit existing item in database <br />
 PUT /list/:id updates the edited item in the database <br />
 DELETE /list/:id deletes that item from the database <br />

<hr>

## Wireframes
 Wireframes with basic page layouts and notes<br />

## Index Page
![index wireframe](https://media.git.generalassemb.ly/user/42170/files/4ec1de22-ecc7-46ae-b3ff-821e024d8e54)

<hr>

## Show Page
![show wireframe](https://media.git.generalassemb.ly/user/42170/files/fdbbc291-2ecc-44e3-88e3-a391f5f242c6)

<hr>

## Edit Page
![edit wireframe](https://media.git.generalassemb.ly/user/42170/files/e6e488d9-fc1f-48ca-9082-19bb47e3b714)

<hr>

## User Stories
As a user, I am a busy person who needs to make sure I get everything I need for the week in one trip. As such, I need a way to both record what I will buy and keep track of when I've bought it. I value efficiency and speed, but still want the flexibility to add more detailed notes on items I will buy if I need to, like the exact brand name and color of soap my wife wants and what aisle to get it from at the store.

<hr>

### MVP Goals
As a shopping trip planner, I want : 
- to be able to quickly add items to the list so that I save time
- to be able to update items and add more notes so that I can remember specific things
- to be able to see and remove my items from the same page so that I save time

<hr>

### Stretch Goals
As a shopping trip planner, I would also like : 
- to have a user account so I can plan items on my desktop then log in again on my phone to check them off (i.e my data persists between sessions I use the app).
