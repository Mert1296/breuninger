const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();

//EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

//Routes
app.use('/', require('./routes/index.js'));
app.use('/', require('./routes/users.js'));

const PORT = process.env.PORT || 5001;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
