const express = require("express");

const routes = require("./routes/index.js");



const app = express();
app.use(express.json());
app.use(routes);

const PORT = 3333;

app.listen(PORT, () => { 
  console.log(`Server is running on port ${PORT}`);
}
);

app.use(express.json());