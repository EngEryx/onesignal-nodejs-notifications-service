const routes = require('./routes/index');
const express = require('express');
const app =  express();
const router = express.Router();
const port = process.env.PORT || 4200;

router.get('/', function(req,res,next){
	res.send('Welcome to Notifications API');
});

routes(app);

app.listen(port);

console.log("Notifications API Server started on: " + port);
