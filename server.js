const express = require("express");
const app = express();
const Router = require("./endpoints/index");

app.use("/", Router);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on ${port}`));
