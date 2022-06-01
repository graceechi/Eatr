import { useState } from "react";
import DeletePhotoContainer from "./DeletePhotoForm";
import { Modal } from "../../context/Modal";
import "./deletephoto.css";

function DeletePhotoModal({ photo }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
        <button onClick={() => setShowModal(true)} id='delete-photo-btn'>
            <i className="fa-solid fa-trash-can"></i>
        </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeletePhotoContainer />
        </Modal>
      )}
    </>
    );
}

export default DeletePhotoModal;
