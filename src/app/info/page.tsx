"use client";
import "@/styles/carinfo.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";

interface Car {
  // Definiere hier die Eigenschaften deines Car-Objekts
  make: string;
  model: string;
  // ...
}

const CarInfoPage = () => {
  const currentUrl =
    typeof window !== "undefined" ? window.location.origin : "";
  const [car, setCar] = useState<Car | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const getCarInfo = async () => {
        try {
          const response = await axios.get(`${currentUrl}/carinfo`);
          if (response.data.success) {
            setCar(response.data.data);
          } else {
            console.log("Etwas ist schief gelaufen");
          }
        } catch (error: any) {
          console.error(error.message);
        }
      };
      getCarInfo();
    }, 1);
    return () => clearTimeout(timer);
  }, [currentUrl]);

  return (
    <main>
      <h1>Fahrzeug Information</h1>
      <div className="cc-carinfo-ct">
        <table>
          <tbody>
            {car &&
              Object.entries(car).map(([key, value]) => {
                console.log(car);
                if (key === "_id") {
                  return null;
                }
                return (
                  <tr key={key}>
                    <td>{key}:</td>
                    <td>{value}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default CarInfoPage;
