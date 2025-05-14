const express = require('express')
const axios = require('axios')
const app = express()
const host = '0.0.0.0'
const port = 3000;

app.get("/", (req, res) => {
    axios.get('http://python_api:3000')
    .then(response => {
        console.log('Resposta da API Flask:', response.data);
      })
      .catch(error => {
        console.error('Erro ao chamar a API Flask:', error.message);
      });
});

app.listen(port, host, () => {
    console.log(`Server is running on https://localhost:${port}`);
})