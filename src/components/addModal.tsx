import React from "react";

interface AddButtonProps {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddModal: React.FC<AddButtonProps> = ({ modal, setModal }) => {
  //! Hier muss das Modal noch richtig erstellt werden

  const closeModal = () => {
    setModal(false);
  };
  return <div onClick={closeModal}>AddModal</div>;
};

export default AddModal;
