const express = require("express");
const expressGraphL = require("express-graphql");

const app = express();

app.use(
  "/graphql",
  expressGraphL({
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log("Its working");
});
