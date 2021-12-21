const httpProxy = require('express-http-proxy');

const userServiceProxy = httpProxy(process.env.USER_SERVICE_URL);
const productServiceProxy = httpProxy(process.env.PRODUCT_SERVICE_URL);
const orderServiceProxy = httpProxy(process.env.ORDER_SERVICE_URL);

class Routes {
  constructor(app) {
    this.app = app;
  }

  /* creating app Routes starts */
  appRoutes() {
    this.app.get('/getUserDetails/:userId', (req, res) => {
      userServiceProxy(req, res);
    });

    this.app.post('/register', (req, res) => {
      userServiceProxy(req, res);
    });

    this.app.post('/login', (req, res) => {
      userServiceProxy(req, res);
    });

    this.app.get('/product/:productId', (req, res) => {
      productServiceProxy(req, res);
    });

    this.app.get('/product', (req, res) => {
      productServiceProxy(req, res);
    });


    this.app.post('/order', (req, res) => {
      orderServiceProxy(req, res);
    });

    this.app.get('/order', (req, res) => {
      orderServiceProxy(req, res);
    });
  }

  routesConfig() {
    this.appRoutes();
  }
}

module.exports = Routes;
