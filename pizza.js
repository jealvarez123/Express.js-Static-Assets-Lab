/* dependencies & app setup */
const express = require('express');
const path = require('path');
const logger = require('morgan');
const app = express();
const pizza = require('./db/pizza');
// const indexdata = require(./routes/index);
// const pizzadata = require(./routes/pizza);

/* setting up port & listen */
const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log(`listening on port ${PORT}`);
});

/* set the view engine */
app.set('views', './views');
app.set('view engine', 'ejs');

/* error logger, static routes */
app.use(logger('dev'));
app.use('/static', express.static(path.join(__dirname, 'public')));
//=====================================


app.get("/pizza", function(req,res){
	res.render('pizza/pizza-index',{pizza: pizza} )
})
app.get("/pizza", function(req,res){
  let pizza = pizza[req.params.id -1 ]
  .render()
	res.render('pizza/pizza-index',{pizza: pizza} )
})

//routes=============


/* error handler */
app.get('*', function(req, res) {
  res.status(404).send({message: 'Oops! Not found.'});
});
