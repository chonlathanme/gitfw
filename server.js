require('dotenv').config();
const express = require('express');
const app = express();
const authRoute = require('./routes/auth-route');

app.use('/auth', authRoute)




const port = process.env.PORT || 9000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})
