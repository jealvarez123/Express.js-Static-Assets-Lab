const express = require('express');
const morgan  = require('morgan');
const path    = require("path");

const app     = express();

app.use(morgan('tiny'));
app.use(express.static('public'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');




const bears = [
  {id: 1, name: 'Giant Panda', url: 'https://en.wikipedia.org/wiki/Giant_panda' },
  {id: 2, name: 'American black bear', url: 'https://en.wikipedia.org/wiki/American_black_bear' },
  {id: 3, name: 'Brown bear', url: 'https://en.wikipedia.org/wiki/Brown_bear'},
  {id: 4, name: 'Polar bear' , url: 'https://en.wikipedia.org/wiki/Polar_bear' },
  {id: 5, name: 'Asian black bear' , url: 'https://en.wikipedia.org/wiki/Asian_black_bear' }
];

const region = [
  {id:1, location: 'Asia', url: ''},
  {id:2, location: 'North America', url: ''},
  {id:3, location: 'Asia', url: ''},
  {id:4, location: 'Asia', url: ''},
]



app.get('/bears', (request, response) => {
    response.send(bears);

});

app.get('/bears/:id', (request, response) =>{
    let id = request.params.id;
    let bear = bears [id-1];

    response.send(bear)

});
//
// app.post('/bears', (request, response) => {
//   response.send('hey mister POSTman');
//
// });

app.get("/instruments", (req, res) => {
  // let data =
  res.render('instruments/instruments',{bears: bears} )
});

app.listen(3000, () => console.log('The system is ALIVE!'))
