import { useState } from "react";
import { Modal } from "../../context/Modal";
import "./index.css";
import SignUpFormContainer from "./SignUpForm";

const SignUpFormModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="signup-btn" onClick={() => setShowModal(true)}>
        <span className="signup-txt">Sign Up</span>
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignUpFormContainer />
        </Modal>
      )}
    </>
  );
};

export default SignUpFormModal;
