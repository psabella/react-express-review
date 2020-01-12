// normally you would import model into the controller
const todos = ['brush your teeth', 'go to school', 'learn things'];

const controller = {
  get: (req, res) => {
    res.status(200).send(todos);
    // res.status(200).send('GET Successful!');
  },

  // test this by editing body in postman, then send post - use double quotes in the object, must have raw and JSON selected

  post: (req, res) => {
    // create req.body, same at todo = req.body.todo
    let { todo } = req.body;
    // todo is from what line above is
    todos.push(todo);
    res.status(201).send(`Posted todo: ${todo}`);
  },

  // test in postman, then hook up the client
  delete: (req, res) => {
    let {index} = req.params; // index = req.params.index
    let deleted = todos.splice(index, 1);
    res.status(200).send(`Deleted ${deleted}`);
  }
}

module.exports = controller;
