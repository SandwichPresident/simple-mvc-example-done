const controllers = require('./controllers');

const router = (app) => {
  app.get('/page1', controllers.page1);
  app.get('/page2', controllers.page2);
  app.get('/page3', controllers.page3);
  app.get('/page4', controllers.page4);
  app.get('/getName', controllers.getName);
  app.get('/findByName', controllers.searchName);

  app.get('/', controllers.index);

  app.post('/setName', controllers.setName);
  app.post('/updateLast', controllers.updateLast);

  // Dog routes
  app.post('/createDog', controllers.createDog);
  app.post('/updateDog', controllers.updateDog);

  // Catch-all route must remain last
  app.get('/*wild', controllers.notFound);
};

module.exports = router;