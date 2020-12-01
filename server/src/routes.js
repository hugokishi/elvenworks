const routes = require('express').Router();

const ResourceController = require('./controllers/ResourcesController');

routes
  .get('/resources',
  ResourceController.index
  )
  .post('/resources',
    ResourceController.store
  )
  .delete(
    '/resources/:id',
    ResourceController.delete
  )
  .post(
    '/resources/:id',
    ResourceController.update
  );

module.exports = routes;
