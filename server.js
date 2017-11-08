const express = require('express');
const hbs = require('hbs');

var app = express();

const port = process.env.PORT || 3000;

app.set('view name','hbs');

hbs.registerPartials(__dirname+"/views/partials");
hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
})

app.use((req, res, next) => {
  console.log(req.method);
  console.log(req.url);
  next();
})
app.use(express.static(__dirname+"/public"));

app.get("/", (req, res) => {
  res.render("home.hbs", {
    title: 'Home',
    content:'Home page content'
  });
});

app.listen(port, () => {
  console.log(`Server is up at ${port}`);
});
