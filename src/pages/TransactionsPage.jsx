// TransactionsPage.jsx
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import TransactionList from '../components/TransactionList';
import TransactionForm from '../components/TransactionForm';

function TransactionsPage() {
  const [transactions, setTransactions] = useState([]);
  const [showForm, setShowForm] = useState(false); // State to manage form visibility
  const [transactionToEdit, setTransactionToEdit] = useState(null); // State to manage transaction to edit
  const [isEditing, setIsEditing] = useState(false); // State to manage edit mode

  const fetchTransactions = () => {
    // Fetch transactions from API
    fetch('http://127.0.0.1:8000/transactions')
    .then((response) => response.json())
    .then((data) => {
        console.log('Fetched transactions:', data);
        setTransactions(data);
      })
    .catch((error) => console.error('Error fetching transactions:', error));
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const handleAddTransactionClick = () => {
    setShowForm(true);
    setIsEditing(false);
  };

  const handleEditTransactionClick = (transaction) => {
    setShowForm(true);
    setIsEditing(true);
    setTransactionToEdit(transaction);
  };

  const handleDeleteTransactionClick = (transactionId) => {
    fetch(`http://127.0.0.1:8000/transactions/${transactionId}`, {
      method: "DELETE",
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        fetchTransactions();
      })
    .catch((error) => console.error("Error deleting transaction:", error));
  };

  return (
    <>
      <Header />
      <div className="container-fluid py-4">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <TransactionList
              transactions={transactions}
              onAddTransactionClick={handleAddTransactionClick}
              onEditTransactionClick={handleEditTransactionClick}
              onDeleteTransactionClick={handleDeleteTransactionClick}
            />
            {showForm && (
              <TransactionForm
                onClose={() => setShowForm(false)}
                refreshTransactions={fetchTransactions}
                transactionToEdit={transactionToEdit}
                isEditing={isEditing}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default TransactionsPage;