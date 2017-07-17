# Untitled Project (node-001-fsc)

![Organization](http://www.explainxkcd.com/wiki/images/1/1b/home_organization.png)

## TLTR
When it comes to learning a new languages, each student is in this cohort is given a preset curriculum that teaches us how ...




## Schedule
* :smirk: Monday (MVP)
	- [x] Brainstorm ideas
	- [x] Choose an app idea
	- [x] Have a high level description of app purpose
	- [ ] Have extensive list of user stories/features
	- [ ] Prioritize list
	- [ ] Mock up user flows, wireframes
	- [ ] Get it approved
	- [ ] Set up a "Hello World" prototype

* :confused: Tuesday (Skeleton)
	- [ ]  Version 1.2 contains

* :sweat: Wednesday (Muscle & Unit Tests)
	- [ ]  Version 1.3 contains 	

* :weary: Thursday (Demo Prep & App Complete)
	- [ ]  Version 1.3 contains

* :bowtie: Friday (Polish & Demo Day)
	- [ ]  Version 1.4 contains

## the Application

App Live on
[Heroku](https://heroku.com)

Back ups on
[GitHub](https://github.com/dankato/node-001-fsc)


### the Necessities
* Simple full stack app
	* CRUD
* User authentication
* Excellent code structure & quality


### Nice to have (listed in priority):
* Like posts created by other users
* Export bookmarks
* Have the ability to add multiple links to one post
* Oauth GitHub
* Accessibility
* Mobile friendly
* Security (cors)


## Design
1. A website that allows users to share knowledge
	- website links (add, remove, tag, like, screenshot, comment/post)
	- video links (add, remove, tag, like, screenshot, comment/post)
	- book links
	- movie links
	- recipe links
2. A website which generates weird names for your future children
3. Top App Rankings (Free, Paid, Rated, Rev, DAU)


## System
* **The Back End (Node & Express)**
	* Mongo DB for server database
	* mLab to host database
	* Mongoose for object data modeling
	* Passport for request authentication
	* bcrypt for encryption
	* Heroku for app deployment
	* Travis CI for continuous deloyment & testing
	* Mocha / Chai for unit testing

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
3. Feed page (Main page where user can CRUD)
4. Create Post page (pop up window over page 3 to create post)
5. Edit Post page (pop up window over page 3 to edit post)
6. Delete Post page (pop up window over page 3 to confirm delete post)

### Endpoints
* GET: /post
* GET: /post/:postId
* POST: /post
* PUT: /post/:postId
* DELETE: /post/:postId

## Database
User: {
	firstName: ,
	lastName: ,
	username: ,
	password: ,
	slack: string,
	email: ,
	githubHandle:
}
Post: {
	header:
	url: ,
	description:,
	rating: {
		one_star: 0,
		two_star: 0,
		three_star: 0,
		four_star: 0,
		five_star: 0
	},
	created: ,
	week: ,
	archive: boolean
}

## Structure


## Stack



## Installation

- Download/Clone the repo
- Install dependencies: `npm install`
- Start server: `node server.js` or `nodemon server.js`
- View in browser: `http://localhost:8080`
- or Heroku link


## markdown
- add gif demos


HKMrAPXR2iUnqq2Cxc/uP4B3Y1lYFQTvmN55EwJdRX0Ut8n6C
dgPm1t89My4JuLbIogWdpba+9k14A9ElG0gOmSsjCiSVu0aBVmA6bofDisamoZ
ZvphwIynNIC+2d+OazUZnjTU95wafwo99NBrVtLMXDk0PzJ6fBKYi742J1d0PO


tranquil-plateau-10397
https://tranquil-plateau-10397.herokuapp.com/

https://git.heroku.com/tranquil-plateau-10397.git
