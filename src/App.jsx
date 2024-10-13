import React, { useState } from "react";
import Form from './Basic-Form/Form';
import Modal from "./Components/Modal";
import Button from "./Components/Button";

const App = () => {
  const [addForm, setAddForm] = useState(false);
  
  const displayForm = (e) => {
    e.preventDefault();
    setAddForm(!addForm);
  };

  const closeModal = () => {
    setAddForm(false);
  };

  return (
    <div>
      <form>
        <div className="details-button">
          <Button label="Add details" onClick={displayForm} />
        </div>
      </form>

      <Modal isOpen={addForm} onClose={closeModal}>
        <Form />
      </Modal>

    </div>
  );
};

export default App;

