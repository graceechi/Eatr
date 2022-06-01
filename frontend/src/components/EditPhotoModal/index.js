import { useState } from "react";
import { Modal } from "../../context/Modal";
// import "./editphotomodal.css";
import EditPhotoContainer from "./EditPhotoForm";

const EditPhotoModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <i className="fa-solid fa-pen-to-square"
        onClick={() => setShowModal(true)}
      ></i>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditPhotoContainer />
        </Modal>
      )}
    </>
  );
};

export default EditPhotoModal;
