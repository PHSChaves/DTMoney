import { useEffect } from "react";
import { api } from "../services/api";
import { Container } from "./styles";

export function TransactionsTable(){
    useEffect(() => {
        // fetch('/transactions') //esse bloco está fazendo uma conexão com a API fake
        //     .then(response => response.json()) // essa linha está pegando a resposta e passando ela como JSON. quando usamos o Fetch temos que converter a reposta em JSON a cada requisição
        //     .then(data => console.log(data)) // essa linha está mostrando a resposta no console.log

        api.get('/transactions') //esse bloco está fazendo uma conexão com a API fake
            .then(response => console.log(response.data)) // essa linha está mostrando a resposta no console.log
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
                    <tr>
                        <td>Desenvolvimento de Website</td>
                        <td className="deposit">R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2021</td>
                    </tr>
                    <tr >
                        <td>Aluguel</td>
                        <td className="withdraw">-R$1.100</td>
                        <td>Casa</td>
                        <td>17/02/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}