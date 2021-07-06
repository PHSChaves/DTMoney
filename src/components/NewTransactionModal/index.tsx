import Modal from 'react-modal';
import {Container, TransactionTypeContainer, RadioBox} from './styles';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { FormEvent, useState } from 'react';
import { api } from '../services/api';


interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){
    const[title, setTitle] = useState(''); //setado como string
    const[value, setValue] = useState(0); //setado como número
    const[category, setCategory] = useState(''); //setado como string
    const[type, setType] = useState('deposit'); //Criamos o State que vai armazenar o tipo do botão e sua mutação

    function handleCreateNewTransaction(event: FormEvent){ 
        // sempre que formos trabalhar com uma função que será passada dentro de um form devemos setar o evento (event)
        // Nós só conseguimos trabalhar com envios padrões se importarmos o FormEvent do react é ele que
        // vai trazer todos os eventos que são possíveis de se passarem dentro de um form

        event.preventDefault(); 
        // Event.preventDefault faz com que o evento padrão do envio de formulário não seja executado
        // o comportamento padrão é ser recarregada a página ao clicar no botão de submit

        const data ={
            title,
            value,
            category,
            type,
        }

        api.post('/transactions', data)
    }



    return(
        <Modal 
            isOpen={isOpen} 
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button 
            type="button" 
            onClick={onRequestClose} 
            className="react-modal-close">
                <img src={closeImg} alt="Fechar modal" />
            </button>

          <Container onSubmit={handleCreateNewTransaction}> 
          {/* Nosso container está com o tipo de FORM, quando passamos algo dentro do 
          onSubmit estamos passando um acontecimento dentro do evento de enviar o formulário*/}
            <h2>Cadastrar transação</h2>

            <input 
                placeholder="Título" 
                value={title}
                onChange={event => setTitle(event.target.value)}
                // Tanto na linha Value quando na OnChange estamos usando os states que foram estabelecidos na linha value
                // a gente armazena o que é default ou seja o comportamento inicial do state e na linha ONCHANGE armazenamos o valor alterado
                // o mesmo comportamento acontece nos outros inputs
            />

            <input 
                type="number"
                placeholder="Valor" 
                value={value}
                onChange={event => setValue(Number(event.target.value))} 
                // a única diferença nesse ONCHANGE é que só temos retorno de um número e caso não passemos o Number 
                //por volta de todo o event nós não conseguimos executar por ele esperará um retorno do tipo string
            />

                <TransactionTypeContainer>
                    <RadioBox 
                        type="button"
                        isActive={type === 'deposit'} //Isso é uma variável de nome escolhido por nós isso faz com que a gente tenha total controle sobre o tipo e o que queremos que aconteça
                        onClick={() => {setType('deposit'); }} /* Nessa linha nós estamos criando uma função para alterar o tipo do estado */
                        activeColor="green"
                    >
                        <img src={incomeImg} alt="Entrada"/>
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox 
                        type="button"
                        isActive={type === 'withdraw'}
                        onClick={() => {setType('withdraw'); }} /* Nessa linha nós estamos criando uma função para alterar o tipo do estado do default que é 'deposit' para withdraw */
                        activeColor="red"
                    >
                        <img src={outcomeImg} alt="Saída"/>
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>

            <input 
               placeholder="Categoria" 
               value={category}
               onChange={event => setCategory(event.target.value)} 
            />

            <button type="submit">
                Cadastrar
            </button>

          </Container>
          
      </Modal>
    )
}