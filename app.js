const express = require('express');
const path = require('path');

const app =express();


// app.use('/website', express.static(path.join(__dirname, 'ParisBlog')));

// app.use('/website', express.static(path.join(__dirname, 'public')));
  // Serve static files from the "public" directory


app.use(express.static(path.join(__dirname, 'public')));


  // Define route for portfolio.html
app.get('/Portfolio', (req, res) => {
    res.sendFile(path.join(__dirname, 'public' ,'Portfolio.html'));
});
  
  // Define route for who.html
app.get('/Who', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Who.html'));
});

// Define route for Contact.html
app.get('/Contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Contact.html'));
  });

  // Define route for store.html
app.get('/store', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'store.html'));
  });

// app.use((req, res)=>{
//      res.status(404);
//      res.send('<h1>Error 404: Resource not found</h1>');
//  });

//
app.listen(process.env.PORT ||5500 || '127.0.0.1', ()=>{
    console.log("App listening on port 5500");
});