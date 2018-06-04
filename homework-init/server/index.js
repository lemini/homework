const path = require("path");
const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");

const port = 3001;
let app = express();

let webpackConfig = require("../webpack/webpack.dev.config");

const comliper = webpack(webpackConfig);
const devMiddle = webpackDevMiddleware(comliper);

app.use(devMiddle);
//todo
const webpackHotMiddleware = require("webpack-hot-middleware");
app.use(webpackHotMiddleware(comliper));

app.listen(port);

//todo
const ip = require("ip");
const chalk = require("chalk");

const host = "localhost";
app.listen(port, host, err => {
  if(err) {
    console.log(err)
  }

  console.log(`

Localhost: ${chalk.magenta(`http://${host}:${port}`)}
      LAN: ${chalk.magenta(`http://${ip.address()}:${port}`)}

${chalk.blue(`Press ${chalk.italic("CTRL-C")} to stop`)}
    `);
});
