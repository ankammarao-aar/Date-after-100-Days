const express = require("express");
const addDays = require("date-fns/addDays");

const app = express();

app.get("/", (request, response) => {
  const todayDate = new Date();
  const afterDates = addDays(
    new Date(
      todayDate.getFullYear(),
      todayDate.getMonth(),
      todayDate.getDate()
    ),
    100
  );

  response.send(
    `${afterDates.getDate()}/${afterDates.getMonth()+1}/${afterDates.getFullYear()}`
  );
});

module.exports = app;
