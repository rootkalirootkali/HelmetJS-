const express = require('express');
const app = express();
const helmet = require('helmet');
app.use(helmet.hidePoweredBy());
app.use(helmet.xssFilter());
app.use(helmet.dnsPrefetchControl());
app.use(helmet.noSniff());
app.use(helmet.ieNoOpen());
app.use(helmet.noCache());
app.use(helmet.contentSecurityPolicy({
  useDefaults: false,
    directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'","trusted-cdn.com"],
    },
     })
   );
app.use(helmet.frameguard({
    action: "deny",}));

app.use(helmet.hsts({
    maxAge: 7776000, force: true
     }) 


     
         );



  




















module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});













































module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
