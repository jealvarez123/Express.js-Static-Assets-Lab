const express = require('express')
const app = express()
const morgan = require('morgan')

app.get('/', (req, res) => res.send('Hello World!'))

app.use(morgan('tiny'));
app.use(express.static('public'));

app.get('*', function(req, res){
  res.send('what???', 404);
});

// app.get('/error', (req, res) => {
//     res.sendfile('error.html', {root: __dirname + '/public'})});


app.listen(3000, () => console.log('Example app listening on port 3000!'))
