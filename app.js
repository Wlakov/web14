let express = require('express');
let app = express();
let indexRoute = require('./routers/indexRoute');
let bookRoute = require('./routers/bookRoute');
let filmRoute = require('./routers/filmRoute');
app.set('view-engine', 'ejs');
app.use(express.static('public'));
app.use('/', indexRoute);
app.use('/book', bookRoute);
app.use('/film', filmRoute);
app.listen(3000, function(){
    console.log("Running");
});