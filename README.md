README
============

About
-------

Test deployment of Node.js app to Heroku using PhantomJS framework buildpack.
The app.js file uses module dependencies defined in the package.json file.
The ExpressJS module is used to create a NodeJS app with HTTP routes.
The HTTP module (in-built) is used to start the NodeJS server.

Setup
-------

1. Install dependencies listed in package.json
2. Run local server instance:
  - Enter ```npm start``` in terminal
  - Enter URL in browser: http://localhost:5000
3. Run production server (Heroku)
  - Enter URL in browser: https://myindesign.herokuapp.com