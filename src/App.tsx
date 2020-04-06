import React, { useState } from "react";
import "./App.css";
import QrReader from "react-qr-reader";

let cameraStyle = {
  width: "100vw",
  heigth: "100vh",
  align: "center",
};

function App() {
  const [result, setResult] = useState("No Result");

  const handleScan = (data: string | null) => {
    if (data) {
      setResult(data);
    }
  };

  const handleError = (err: any) => {
    console.error(err);
  };

  return (
    <div className="App">
      <header className="App-header">RDC Qrcode</header>
      <div className="App-content">
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={cameraStyle}
        />
        <p>{result}</p>
      </div>
    </div>
  );
}

export default App;
