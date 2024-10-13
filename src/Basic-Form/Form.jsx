import { useState } from "react";
import Button from "../Components/Button";
import Modal from "../Components/Modal";
import DisplayPage from "./DisplayPage";

function Form() {
  const [inputs1, setInputs1] = useState({ name: "", age: "", contact: "", email: "" });
  const [submittedValues, setSubmittedValues] = useState(null);
  const [addForm_2, setAddForm_2] = useState(false);
  const [addForm_4, setAddForm_4] = useState(false);
  
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs1((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedValues(inputs1);
    console.log("form1 values", submittedValues);
    setAddForm_4(true);
    setAddForm_2(!addForm_2);
  };

  const closeModal_2 = () => {
    setAddForm_2(false);
    setAddForm_4(false);
    setInputs1({ name: "", age: "", contact: "", email: "" });
  };

  return (
    <>
      {/* <form onSubmit={handleSubmit}> */}
        <div>
          <label>
            Enter your name:
            <input type="text" name="name" value={inputs1.name} onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            Enter your age:
            <input type="text" name="age" value={inputs1.age} onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            Enter your contact number:
            <input type="text" name="contact" value={inputs1.contact} onChange={handleChange} />
          </label>
          
        </div>
        <div>
          <label>
            Enter your email:
            <input type="email" name="email" value={inputs1.email} onChange={handleChange} />
          </label>
        </div>
        
        <Button label="Proceed" type="submit" onClick={handleSubmit} />
      
        <Modal isOpen={addForm_2} onClose={closeModal_2}>
        
          <Modal isOpen={addForm_4} onClose={closeModal_2}>
            {<DisplayPage inputValues={inputs1}/>}
          </Modal> 
        
        </Modal>
    </>
  );
}

export default Form;
