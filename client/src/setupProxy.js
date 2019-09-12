const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(proxy("/graphql", { target: "http://api:9000/" }));
};
