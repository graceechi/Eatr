import { useState } from "react";
import { Modal } from "../../context/Modal";
import "./editphotomodal.css";
import EditPhotoContainer from "./EditPhotoForm";

const EditPhotoModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
        <button onClick={() => setShowModal(true)} id='edit-btn'>
            <i className="fa-solid fa-pen-to-square"></i>
        </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditPhotoContainer setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
};

export default EditPhotoModal;
