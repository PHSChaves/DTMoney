// import styled from 'styled-components';

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";


// const Title = styled.h1`
//   color: #8257e6;
//   font-size: 64px;
// ` Caso queira usar o styled-components direto no código

Modal.setAppElement('#root'); //Por questões de acessibilidade colocamos a div do modal na nossa main div do projeto para evitar interações com a parte que está por baixo do modal

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false); //aqui setamos o estado de visibilidade ou não

  function handleOpenNewTransactionModal(){ //aqui estamos criando a função que sera executada no evento OnClick
      setIsNewTransactionModalOpen(true); // aqui estamos mudando o estado padrão do modal (false) para true, assim quando essa função for executada ele abrirá o modal
  }

  function handleCloseNewTransactionModal(){ //aqui estamos criando a função que sera executada no evento OnClick
      setIsNewTransactionModalOpen(false); // aqui estamos voltando para o estado padrão do modal (true), assim quando essa função for executada ele fechará o modal
  }

  return (
    <>
     <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} /> {/* Nessa linha estamos mandando a informação do state do modal para o elemento Header que é um elemento filho*/} 
     <Dashboard />

     <NewTransactionModal 
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseNewTransactionModal} 
      />
     <GlobalStyle/>
    </>
  );
}
