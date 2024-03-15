import "@/styles/carinfo.scss";
import React from "react";

const CarInfoPage = () => {
  return (
    <main>
      <h1>Fahrzeug Information</h1>
      <div className="cc-carinfo-ct">
        <table>
          <tbody>
            <tr>
              <td>Marke:</td>
              <td>Seat</td>
            </tr>
            <tr>
              <td>Model:</td>
              <td>Arosa</td>
            </tr>
            <tr>
              <td>Farbe:</td>
              <td>Schwarz</td>
            </tr>
            <tr>
              <td>Erstzulassung:</td>
              <td>24.04.1998</td>
            </tr>
            <tr>
              <td>Kennzeichen:</td>
              <td>OL K 5562</td>
            </tr>
            <tr>
              <td>Kilometerstand:</td>
              <td>200.000</td>
            </tr>
            <tr>
              <td>HU:</td>
              <td>09.2024</td>
            </tr>
            <tr>
              <td>FIN:</td>
              <td>VSSZZZ6HZWW053347</td>
            </tr>
            <tr>
              <td>HSN:</td>
              <td>7593</td>
            </tr>
            <tr>
              <td>TSN:</td>
              <td>39200M9</td>
            </tr>
            <tr>
              <td>Emissionsklasse:</td>
              <td>D3</td>
            </tr>
            <tr>
              <td>Kraftstoff:</td>
              <td>Benzin</td>
            </tr>
            <tr>
              <td>Hubraum:</td>
              <td>999</td>
            </tr>
            <tr>
              <td>KW:</td>
              <td>37</td>
            </tr>
            <tr>
              <td>PS:</td>
              <td>50</td>
            </tr>
            <tr>
              <td>Höchstgeschwindigkeit:</td>
              <td>151</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default CarInfoPage;
