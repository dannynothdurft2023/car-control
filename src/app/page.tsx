"use client";
import Card from "@/components/card";
import InfoCard from "@/components/infoCard";
import "@/styles/home.scss";
import Image from "next/image";

export default function Home() {
  const uploadProfileImage = () => {
    console.log("Funktion kommt später");
    //! Bild wird auf z. B. Claudinary Hochgeladen
    //! Die URL wird in der Datenbank z. B. MongoDB gespeichert
    //! Es muss noch ein Car Profile Shema angelegt werden.
  };

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
          style={{
            display: "block",
            objectFit: "cover",
            borderRadius: "50%",
            margin: "20px auto 0",
          }}
        />
        <span className="cc-profileImageUpload-b" onClick={uploadProfileImage}>
          <Image
            src="/camera-icon.svg"
            width={25}
            height={25}
            alt="Kamera Icon"
            title="Kamera Icon"
          />
        </span>
      </div>
      <InfoCard title="Kilometerstand" value="200.000" bg="#50b9fa" />
      <div className="cc-dashboard-ct">
        <Card bg="#be75f7" title="Anschaffung" value="500" icon="/garage.svg" />
        <Card
          bg="#ff939b"
          title="Reparatur"
          value="106.57"
          icon="/repair.svg"
        />
        <Card bg="#ffca72" title="Zubehör" value="39" icon="/car.svg" />
        <Card
          bg="#8ad294"
          title="laufende Kosten"
          value="50.04"
          icon="/gas.svg"
        />
      </div>
      <Card
        bg="#50b9fa"
        title="Gesammt Kosten"
        value="695.61"
        icon="/money.svg"
      />
    </main>
  );
}
