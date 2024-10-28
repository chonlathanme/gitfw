require("dotenv").config();
const express = require("express");
const app = express();

//import routes
const userRoute = require("./routes/userRoute");

app.use("/user", userRoute);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
