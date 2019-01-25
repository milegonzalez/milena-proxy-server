const express = require('express');
const path = require('path');
const cors = require('cors');
// const proxy = require('express-http-proxy');
const app = require('express')();
const port = process.env.PORT || 3000;
const proxy = require('http-proxy-middleware');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../src/client')));

app.use(proxy('/api/videos', {target: 'http://faris-video-service-component-env.paejbawjtv.us-west-2.elasticbeanstalk.com/'}));
app.use(proxy('/api/games', {target: 'http://faris-video-service-component-env.paejbawjtv.us-west-2.elasticbeanstalk.com/'}));
app.use(proxy('/api/users', {target: 'http://faris-video-service-component-env.paejbawjtv.us-west-2.elasticbeanstalk.com/'}));


app.listen(port, () => {
  console.log(`server running. Using port ${port}`);
})

