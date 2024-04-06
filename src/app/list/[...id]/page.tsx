"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

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

  return (
    <div>
      {issues
        ? issues.map((issue: any) => {
            return (
              <div key={issue._id}>
                <p>
                  {issue.text} - {issue.value} €
                </p>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default ListPage;
