import { useEffect, useState } from "react";
import { api } from "../services/api";
import { Container } from "./styles";

interface Transaction{
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

export function TransactionsTable(){
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        // fetch('/transactions') //esse bloco está fazendo uma conexão com a API fake
        //     .then(response => response.json()) // essa linha está pegando a resposta e passando ela como JSON. quando usamos o Fetch temos que converter a reposta em JSON a cada requisição
        //     .then(data => console.log(data)) // essa linha está mostrando a resposta no console.log


        api.get('/transactions')
            .then(response => setTransactions(response.data.transactions))

        //api.get('/transactions') esse bloco está fazendo uma conexão com a API fake
            //.then(response => console.log(response.data)) essa linha está mostrando a resposta no console.log
    }, []);

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.map(transaction => (
                        <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            <td className={transaction.type}>
                                {new Intl.NumberFormat('pt-BR', { 
                                    //INTL é um formatador padrão do React que serve para criarmos padrões de
                                    //formatação para datas e moedas. Quando estamos falando de moedas
                                    //precisamos passar alguns padrões dentro da formatação.
                                    //para formatarmos como moeda passamos NumberFormat e o padrão do local ex: pt-BR
                                    //caso estejamos em outros paises precisaremos pegar o timezone do navegador
                                    //passamos a estilização da formação do número nesse caso é 'currency' e o 
                                    // local do tipo da moeda que nesse caso é BRL
                                    //Caso formos fazer uma data basta criarmos um intl como DateTimeFormat
                                    //e caso a data esteja como string modificamos ela via JS passando ela dentro de um New date
                                    style:'currency',
                                    currency: 'BRL'
                                }).format(transaction.amount)}
                            </td>
                            <td>{transaction.category}</td>
                            <td>{new Intl.DateTimeFormat('pt-BR').format(
                                new Date(transaction.createdAt)
                            )}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    );
}