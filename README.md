## Express-React-Review
Express review with intro to axios

* npm install
[Express Docs](https://expressjs.com/en/guide/routing.html)
[Axios Docs](https://github.com/axios/axios)

### Exercise 1

index.js

* Create a basic express server in server/index.js
* Use any dependencies
* Assign a port and begin listening

package.json

* Add a start script to start your server with nodemon

then run: npm start

### Exercise 2

index.js

* Use express.static to serve our index.html in client/dist/
* Create a basic .get to path '/name' that sends a response with your name
(test it in Postman)

### Exercise 3

controller.js

* Build a controller that handles GET POST and DELETE and export it
* Your controller should send back a message indicating that it received the request

router.js

* Build a router using express.Router to use our controller

index.js

* Have your express server use your router for routes to '/api'

### Exercise 4

* npm run build to start webpack
(webpack contains babel - don't touch it - creates bundle.js)

index.html

* Add our bundle to index.html

controller.js

* Create an array in your controller to represent your database of todos and give it some default todos
* Refactor your GET request to send your array of todos
(test via postman with endpoint /api)

List.jsx

* Use axios to add functionality to getTodos
(axios is like ajax)

### Exercise 5

controller.js

* Refactor your POST request to add to our array of todos

List.jsx

* Use axios to add functionality to postTodo

### Exercise 6

controller.js

* Refactor your DELETE request to remove from our array given an index

List.js

* Use axios to add functionality to deleteTodo