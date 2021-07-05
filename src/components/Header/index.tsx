import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';


interface HeaderProps{
    onOpenNewTransactionModal: () => void; //aqui estamos declarando o handleOpenNewTransactionModal dentro do nome que passamos para ele no elemento pai e dizemos que é um elemento vazio
}

export function Header({onOpenNewTransactionModal}: HeaderProps) { // nessa linha estamos setando as props para esse componente de acordo com o que foi dito no componente pai e usamos a interface que acabamos de criar
    

    return(
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" /> 
                <button type="button" onClick={onOpenNewTransactionModal}> {/* Nessa linha estamos usando o que foi trago do elemento pai e usando as funções que já foram setadas no APP.tsx */}
                    Nova transação
                </button>
            </Content>

           
        </Container>
    )
}