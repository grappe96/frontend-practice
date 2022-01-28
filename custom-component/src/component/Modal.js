import '../css/common.css';
import '../css/modal.css';
import Alert from '../component/Alert';
import { useState } from 'react';

function Modal() {
  const [isAlert, setIsAlert] = useState(false);
  const closeAlert = () => {
    setIsAlert(false);
  };
  const openAlert = () => {
    setIsAlert(true);
  };

  return (
    <>
      <div className="title">Modal</div>
      <div className="modal-body">
        <button className="modal-button" onClick={openAlert}>
          Open Modal
        </button>
      </div>
      <Alert content="HELLO CODESTATES!" isOpen={isAlert} close={closeAlert} />
    </>
  );
}

export default Modal;
