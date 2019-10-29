import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/cadastro', (req, res) => {
  console.log(req.body);
  res.status(200).send({
    message: "Cadastro realizado com sucesso"
  })
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});