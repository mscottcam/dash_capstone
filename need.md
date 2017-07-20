1. why when hitting this endpoint /api/posts, it triggers the catch-all non-existent endpoint 
    line 125 server.js
    These exist:
    * GET: /api/post
    * GET: /api/post/:postId
    * POST: /api/post
    * PUT: /api/post/:postId
    * DELETE: /api/post/:postId

    Possible solution, update config file with this url mongodb://dev:password@ds123371.mlab.com:23371/dash-app

2. how to keep password in above url secret

3. create new post has a extra close button, not sure how to remove

4. need submit listener to pull in input data to seed into database, but not working

5. jquery eslint $ fix

6. search for (@help) in app.js

7. auth setup, nodemon auth.js, push

8. Delete functional

8. edit functional

9. fetch