import express from 'express';
import calculator from '../web-api-utils/util/number.js';
import formatter from './util/text.js';

const app = express();

app.use(express.json());

app.get('/util/number/:action', (req, res) => {
  const { action } = req.params;
  const input = req.query.input.split(',');

  const result = {
    action,
    input,
    output: calculator(input, action),
  };

  res.send(result);
});

app.post('/util/text/:action', (req, res) => {
  const { action } = req.params;
  const { input } = req.body;

  const result = {
    action,
    input,
    output: formatter(input, action),
  };

  res.send(result);
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
