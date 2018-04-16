const express = require('express');
const morgan  = require('morgan');
const path    = require("path");

const app     = express();

app.use(morgan('tiny'));
app.use(express.static('public'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


const videos = [
    {id: 1, comedian: "Judah Friedlander", title: "America is the Greatest Country in the United States", url: "https://www.netflix.com/watch/80208273?trackId=13752289&tctx=0%2C0%2C"},
    {id: 2, comedian: "Michael Che", title: "Micheal Che Matters", url: "https://www.netflix.com/watch/80049871?trackId=13752289&tctx=0%2C0%2C"},
    {id: 3, comedian: "Ali Wong", title: "Baby Cobra", url: "https://www.netflix.com/watch/80101493?trackId=13752290&tctx=1%2C1%2C"}
  ];

const test = "hello"


const instruments = [
  {id: 1, name: "Guitar", type: "String", url: "https://en.wikipedia.org/wiki/Guitar"},
  {id: 2, name: "Clarinet", type: "Woodwind", url: "https://en.wikipedia.org/wiki/Clarinet"},
  {id: 3, name: "Koto", type: "String", url: "https://en.wikipedia.org/wiki/Koto_(instrument)"},
  {id: 4, name: "Xylophone", type: "Percussion", url: "https://en.wikipedia.org/wiki/Xylophone"}
];


app.get("/instruments", (req, res) => {
  // let data =
  res.render('videos/instruments',{instruments: instruments} )});


  app.get('/instruments/:id', (request, response) => {
      let id = request.params.id;
      let instrument = instruments[id-1];

      response.send(instrument);
  });

  app.get("/helloworld", (req, res) => {
    let data = {
      message: 'Hello World!',
      documentTitle: 'Comedy Videos!!',
      subTitle: 'Read some of the coolest comedy videos around.',
      showMore: true,
      comedians: ['John Mulaney', 'Michael Che', 'Maria Bamford']
    }
    res.render('index',         data);
    // ^nameof file   ^data we want to send
  });

  // app.get("/show", (req, res) => {
  //   // let test = {
  //   //   shows:"hello"};
  //   // request.params.id;
  //   // let video = videos[id-1];
  //
  //   res.render('videos/show', {instruments: instruments}  )
  // });


  app.get("/show", (req, res) => {
    // let data =
    res.render('videos/show',{instruments: instruments} )
  });
// app.get('*', function(req, res){
//   res.send('what???', 404);
// });


// app.get('/error', (req, res) => {
//     res.sendfile('error.html', {root: __dirname + '/public'})});


app.listen(3000, () => console.log('Example app listening on port 3000!'))
