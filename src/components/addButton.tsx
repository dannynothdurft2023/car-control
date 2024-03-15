import Image from "next/image";

interface AddButtonProps {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddButton: React.FC<AddButtonProps> = ({ modal, setModal }) => {
  const openModal = () => {
    setModal(true);
  };
  return (
    <div className="cc-addbutton-button" onClick={openModal}>
      <Image
        src="/icons/addbutton.svg"
        width={60}
        height={60}
        alt="Add Button"
        title="Add Button"
        style={{ filter: "invert(100%) hue-rotate(100deg)" }}
      />
    </div>
  );
};

export default AddButton;
