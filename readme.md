# Untitled Project (node-001-fsc)

![Organization](http://www.explainxkcd.com/wiki/images/1/1b/home_organization.png)

## TLTR
A student dashboard that students can view and contribute to by adding useful resources such as links posted in slack, or material shared by mentors.

## the Application
App Live on
[Heroku](https://tranquil-plateau-10397.herokuapp.com/)
## Schedule
* :smirk: Monday (MVP)
	- [x] Brainstorm ideas
	- [x] Choose an app idea
	- [x] Have a high level description of app purpose
	- [x] Have extensive list of user stories/features
	- [x] Prioritize list
	- [x] Mock up user flows, wireframes
	- [x] Get it approved
	- [x] Set up a "Hello World" prototype

* :confused: Tuesday (Skeleton & Unit Tests)
	*  Version 1.2 contains
	- [ ] working skeleton wk 7
	- [x] get (functional)
	- [x] post (functional)
	- [x] delete (functional)
	- [x] put (functional)
	- [x] Object seeding

* :sweat: Wednesday (Muscle)
	- [ ] Version 1.3 contains 	
	- [ ] Unit Tests for CRUD
	- [ ] Post Dialog print to HTML

* :weary: Thursday (Demo Prep & App Complete)
	- [ ] Version 1.3 contains
	- [ ] auth create profile
	- [ ] auth login flow

* :bowtie: Friday (Polish & Demo Day)
	- [ ] Version 1.4 contains
	- [ ] Demo Deck


## Design
A central location for students to grab the necessities on the fly when learning to code.
Mentor share something you think the rest of the class will find helpful, instruction send out a url in slack but can't find it, or you are researching on your own and found an interesting article, video or reading material that could help other out, you now can share that all in the Dash-App.
The current thinkful dashboard houses the main topics and links to prerequirement reading material but what about those daily questions like, what was my pair's github handle or which week did we learn mongoose on? You can now find those answers in the Dash-App. Try it out.


### the Necessities
* Simple full stack app
	* CRUD
* Basic user authentication
* Excellent code structure & quality


### Nice to have (listed in priority):
* Have the ability to add multiple links to one post
* Oauth GitHub
* Accessibility
* Mobile friendly

## Wireframe / Spec
https://goo.gl/iUP5ZW

## System
* **The Back End (Node & Express)**
	* Mongo DB for server database
	* mLab to host the database
	* Mongoose for object data modeling
	* Passport for request authentication
	* bcrypt for encryption
	* Heroku for hosting our app
	* Travis CI for continuous deployment & running unit tests
	* Mocha / Chai for creating unit testing

* **The Front End**
	* HTML/CSS
	* Flexbox

* **Tools**
	* Postman for testing RESTful endpoints

## User Stories
### As a user i can:
* Create an account (username, password, first name, last name)
* Log into my own account (username, password)
* Post links to news feed
	* create button for every week (avoids ill placed posts)
	* add single url
	* enter header (enter very small description of post)
	* enter description of post
* View news feed with my posted links
* View posts created by other users
* View other student information (github, slack, email, etc.)
* View week/subject menu to navigate through
* Click on link & be redirected to website in a new tab
* Edit post to change descriptions, updated URL
* Delete posts with confirmation pop up


### Views
1. Create an Account (or login) page
2. Login page (redirect users to this page after signing up on page 1 or clicking on log in on page 1)
3. Dashboard page (Main page where user can CRUD)
4. Create Post pop up dialog over page 3
5. Edit Post pop up dialog over page 3
6. Delete Post confirmation pop up dialog over page 3

### Endpoints
## Posts
* GET: /api/posts
* GET: /api/posts/:pid
* POST: /api/posts
* PUT: /api/posts/:pid
* DELETE: /api/posts/:pid

## Users
* GET: /api/stu/:uid
* POST: /api/stu
* PUT: /api/stu/:uid
* DELETE: /api/stu/:uid

## Back ups on
[GitHub](https://github.com/mscottcam/dash_capstone)

## Installation
- Download/Clone the repo
- Install dependencies: `npm install`
- Start server: `node server.js` or `nodemon server.js`
- View in browser: `http://localhost:8080`
- or use Heroku

