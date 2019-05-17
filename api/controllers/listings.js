const knex = require('../knex');

module.exports = {
  index: (req, res) => {
    let page = 1;
    if (req.query.page) {
      page = Number(req.query.page);
    }
    knex('listings')
      .offset((page - 1) * 10)
      .limit(10)
      .then(results => {
        res.json(results);
      })
      .catch(err => {
        res.status(400).send({ message: err });
      });
  },

  grabListing: (req, res) => {
    knex('listings')
      .where('id', req.params.id)
      .first()
      .then(results => {
        res.json(results);
      })
      .catch(err => {
        res.status(400).send({ message: err });
      });
  },

  createListing: (req, res) => {
    knex('listings')
      .insert(
        {
          user_id: req.body.user_id,
          street_address: req.body.street_address,
          city: req.body.city,
          zip_code: req.body.zip_code,
          state: req.body.state,
          image_url: req.body.image_url,
          home_type: req.body.home_type,
          price: req.body.price,
          description: req.body.description
        },
        '*'
      )
      .then(result => {
        res.json(result[0]);
      })
      .catch(err => {
        res.status(422).send({ message: err });
      });
  },

  updateListing: (req, res) => {
    knex('listings')
      .where('id', req.params.id)
      .update({
        street_address: req.body.street_address,
        city: req.body.city,
        zip_code: req.body.zip_code,
        state: req.body.state,
        image_url: req.body.image_url,
        home_type: req.body.home_type,
        price: req.body.price,
        description: req.body.description
      })
      .then(results => {
        res.json(results[0]);
      })
      .catch(err => {
        res.status(400).send({ message: err });
      });
  },

  deleteListing: (req, res) => {
    knex('listings')
      .del()
      .where('id', req.params.id)
      .then(() => {
        res.status(200).send({ message: 'Sucessfully deleted listing' });
      })
      .catch(err => {
        res.status(422).send({ message: err });
      });
  }
};
