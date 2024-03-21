"use client";
import "@/styles/modal.scss";
import React, { useState } from "react";
import Input from "@/components/input";
import axios from "axios";

interface AddButtonProps {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddModal: React.FC<AddButtonProps> = ({ modal, setModal }) => {
  const currentUrl =
    typeof window !== "undefined" ? window.location.origin : "";

  const [issue, setIssue] = useState({
    category: "",
    text: "",
    value: "",
  });

  const handleIssueChange = ({ currentTarget: input }: any) => {
    setIssue({
      ...issue,
      [input.name]: input.value,
    });
  };

  const saveIssue = async () => {
    try {
      const response = await axios.post(`${currentUrl}/api/save-issue`, {
        data: issue,
      });
      if (response) {
        setModal(false);
      }
    } catch (error: any) {
      console.log("False");
    }
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className="ct-overlay">
      <div className="ct-add-modal">
        <span onClick={closeModal}>X</span>
        <Input
          label="Kategorie"
          value={issue.category}
          name="category"
          onChange={handleIssueChange}
        />
        <Input
          label="Text"
          value={issue.text}
          name="text"
          onChange={handleIssueChange}
        />
        <Input
          label="Summe"
          value={issue.value}
          name="value"
          onChange={handleIssueChange}
        />
        <button onClick={saveIssue}>Speichern</button>
      </div>
    </div>
  );
};

export default AddModal;
