module.exports = function(app) {
  var express = require('express');
  var charactersRouter = express.Router();

  charactersRouter.get('/', function(req, res) {
    res.send(JSON.stringify({ data: [
        {
          type: 'characters', 
          id: 1,
          attributes: {
            id: 1,
            name: 'Zelda'
          }
        },
        {
          type: 'characters',
          id: 2,
          attributes: {
            id: 2,
            name: 'Link'
          }
        },
      ]
    }));
  });

  charactersRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  charactersRouter.get('/:id', function(req, res) {
    res.send({
      'characters': {
        id: req.params.id
      }
    });
  });

  charactersRouter.put('/:id', function(req, res) {
    res.send({
      'characters': {
        id: req.params.id
      }
    });
  });

  charactersRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/characters', charactersRouter);
};
