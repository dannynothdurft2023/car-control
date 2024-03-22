"use client";
import React, { useState, useEffect } from "react";
import Card from "@/components/card";
import InfoCard from "@/components/infoCard";
import "@/styles/home.scss";
import Image from "next/image";
import AddButton from "@/components/addButton";
import AddModal from "@/components/addModal";
import axios from "axios";

export default function Home() {
  const currentUrl =
    typeof window !== "undefined" ? window.location.origin : "";
  const [modal, setModal] = useState(false);
  const [issues, setIssues] = useState([]);

  const uploadProfileImage = () => {
    console.log("Funktion kommt später");
    //! Bild wird auf z. B. Claudinary Hochgeladen
    //! Die URL wird in der Datenbank z. B. MongoDB gespeichert
    //! Es muss noch ein Car Profile Shema angelegt werden.
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const getAllIssue = async () => {
        try {
          const response = await axios.get(`${currentUrl}/api/get-all-issue`);
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

  interface Issue {
    category: string;
    text: string;
    value: string;
  }

  // const laufendeKostenItems: Issue[] = issues.filter(
  //   (item: Issue) => item.category === "laufende Kosten"
  // );

  const summeAnschaffungItems: number = issues.reduce(
    (sum: number, item: Issue) => {
      return item.category === "Anschaffung"
        ? sum + parseFloat(item.value)
        : sum;
    },
    0
  );

  const summeReparaturItems: number = issues.reduce(
    (sum: number, item: Issue) => {
      return item.category === "Reparatur" ? sum + parseFloat(item.value) : sum;
    },
    0
  );

  const summeZubehoerItems: number = issues.reduce(
    (sum: number, item: Issue) => {
      return item.category === "Zubehör" ? sum + parseFloat(item.value) : sum;
    },
    0
  );

  const summeLaufendeKosten: number = issues.reduce(
    (sum: number, item: Issue) => {
      return item.category === "laufende Kosten"
        ? sum + parseFloat(item.value)
        : sum;
    },
    0
  );

  const totalCost: number = issues.reduce((sum: number, item: Issue) => {
    return sum + parseFloat(item.value);
  }, 0);

  return (
    <main>
      <h1>Seat Arosa</h1>
      <div className="cc-profile-ct">
        <Image
          src="/car-profile.jpg"
          width={280}
          height={280}
          alt="Car Profile"
          title="Car Profile"
          priority={true}
          style={{
            display: "block",
            objectFit: "cover",
            borderRadius: "50%",
            margin: "20px auto 0",
          }}
        />
        <span className="cc-profileImageUpload-b" onClick={uploadProfileImage}>
          <Image
            src="/icons/camera-icon.svg"
            width={25}
            height={25}
            alt="Kamera Icon"
            title="Kamera Icon"
          />
        </span>
      </div>
      <InfoCard title="Kilometerstand" value="200.000" bg="#50b9fa" />
      <div className="cc-dashboard-ct">
        <Card
          bg="#be75f7"
          title="Anschaffung"
          value={summeAnschaffungItems.toFixed(2)}
          icon="/icons/garage.svg"
        />
        <Card
          bg="#ff939b"
          title="Reparatur"
          value={summeReparaturItems.toFixed(2)}
          icon="/icons/repair.svg"
        />
        <Card
          bg="#ffca72"
          title="Zubehör"
          value={summeZubehoerItems.toFixed(2)}
          icon="/icons/car.svg"
        />
        <Card
          bg="#8ad294"
          title="laufende Kosten"
          value={summeLaufendeKosten.toFixed(2)}
          icon="/icons/gas.svg"
        />
      </div>
      <Card
        bg="#50b9fa"
        title="Gesammt Kosten"
        value={totalCost.toFixed(2)}
        icon="/icons/money.svg"
      />
      <AddButton modal={modal} setModal={setModal} />
      {modal ? <AddModal modal={modal} setModal={setModal} /> : null}
    </main>
  );
}
