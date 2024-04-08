"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

const ListPage = () => {
  const currentUrl =
    typeof window !== "undefined" ? window.location.origin : "";
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const getAllIssue = async () => {
        try {
          const response = await axios.post(`${currentUrl}/get-issue`, {
            list: window.location.pathname,
          });
          if (response.data.success) {
            setIssues(response.data.data);
          } else {
            console.log("Etwas ist schief gelaufen");
          }
        } catch (error: any) {
          console.error(error.message);
        }
      };
      getAllIssue();
    }, 1);
    return () => clearTimeout(timer);
  }, [currentUrl]);

  const deleteItem = async (item: any) => {
    console.log(item);
    try {
      const response = await axios.post(`${currentUrl}/delete-issue`, {
        data: item,
      });
      if (response.data.success) {
        setIssues((prevIssues) => prevIssues.filter((issue) => issue !== item));
      } else {
        console.log("Etwas ist schief gelaufen");
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <div className="cc-list-body">
      {issues
        ? issues.map((issue: any) => {
            return (
              <div className="cc-list-card" key={issue._id}>
                <p>{issue.text}</p>
                <p>{parseFloat(issue.value).toFixed(2)} €</p>
                <button
                  className="remove-btn"
                  onClick={() => deleteItem(issue)}
                >
                  <Image
                    src="/icons/delete.svg"
                    width={25}
                    height={25}
                    alt="Delete Button"
                    title="Delete Button"
                  />
                </button>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default ListPage;
