import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model} from 'miragejs';
import { App } from './App';


createServer({//o miragejs tem um banco de dados interno dele para conseguirmos armazenar as informações.
  models: {
    transaction: Model, 
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de Website',
          type: 'deposit',
          category: 'Dev',
          amount: 8000,
          createdAt: new Date('2021-02-12 09:00:00'),
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 1100,
          createdAt: new Date('2021-02-14 09:00:00'),
        },
      ]
    })
  },

  routes(){
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => { //Após termos feito a API fake criamos o método post para ela dentro da rota que setamos
      const data = JSON.parse(request.requestBody) //como nós trazemos as informações como JSON devemos 'converter' a resposta para JSON pois assim conseguimos visualizar a resposta.

      return schema.create('transaction', data) //schema é o nosso banco de dados

      //return data retornamos a resposta padrão que queremos que seja setado.
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);