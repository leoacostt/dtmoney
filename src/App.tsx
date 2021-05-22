import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import Modal from 'react-modal'
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionProvider } from "./hooks/useTransactions";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransasactionModalOpen, setIsNewTransasactionModalOpen] = useState(false)

  function handleOpenNewTransasactionModal() {
      setIsNewTransasactionModalOpen(true);
  }

  function handleCloseNewTransasactionModal() {
      setIsNewTransasactionModalOpen(false);
  }
  
  return (
    <TransactionProvider>

      <Header onOpenNewTransactionModal={handleOpenNewTransasactionModal}/>

      <Dashboard/>

      <NewTransactionModal
      isOpen={isNewTransasactionModalOpen}
      onRequestClose={handleCloseNewTransasactionModal}
      />

      <GlobalStyle/>

    </TransactionProvider>
  );
}
