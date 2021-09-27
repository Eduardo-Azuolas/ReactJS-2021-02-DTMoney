import { useState } from 'react';

import Modal from 'react-modal'
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";

import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root')

export function App() {
  const [ isNewTransactionModalOpen, setIsNewMTransactionModalOpen ] = useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewMTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewMTransactionModalOpen(false)
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>

      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </>
  );
}