"use client";
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
    </main>
  );
}
