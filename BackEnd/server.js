const path = require("path");

const express = require("express");
const request = require("request");
const hbs = require("hbs");

const app = express();
const PORT = process.env.PORT || 5000;
const hbsTemplateDir = path.join(__dirname, "../FrontEnd/template engine");
const publicDir = path.join(__dirname, "../FrontEnd/public");
const APIKEY = "ad06e0948c0f47f8a1b7dea2a2d87689";
const url = `https://newsapi.org/v2/everything?q=tesla&from=2021-11-13&sortBy=publishedAt&apiKey=${APIKEY}`;

app.set("view engine", "hbs");
app.set("views", hbsTemplateDir);

hbs.registerPartials(hbsTemplateDir);

app.use(express.static(publicDir));

app.get("/", (_, res) => {
  request({ url, json: true }, (err, data) => {
    // Low Level Error
    if (err) {
      return res.render("error-page", {
        title: `Can't Access API!!`,
      });
      // API Error or Query Errors
    } else if (data.body.message) {
      return res.render("error-page", {
        title: `An Error has Occurred. Please Check Your API KEY or Query`,
      });
    } else {
      res.render("index", {
        allData: data.body.articles,
      });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Your Server is running on port: ${PORT}`);
});
