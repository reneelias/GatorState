const listings = require('../controllers/listings');

module.exports = app => {
  app.get('/listings', listings.index);
  app.get('/listings/:id', listings.grabListing);
  app.post('/listings', listings.createListing);
  app.patch('/listings/:id', listings.updateListing);
  app.delete('/listings/:id', listings.deleteListing);
};
