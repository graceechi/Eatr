import { useState } from "react";
import { Modal } from "../../context/Modal";
import "./index.css";
import LoginFormContainer from "./LoginForm";

const LoginFormModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="login-btn" onClick={() => setShowModal(true)}>
        Log In
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginFormContainer />
        </Modal>
      )}
    </>
  );
};

export default LoginFormModal;
