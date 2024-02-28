import { useState } from "react";
import QRCode from "react-qr-code"; // You have to first install this using npm install.

const QRCodeGenerator = () => {
  const [input, setInput] = useState("");
  const [qrCode, setQrCode] = useState("");

  const handleQrCodeGenerator = () => {
    setQrCode(input);
    setInput("");
  };

  return (
    <div className="qr-code-container">
      <h2>QR Code Generator</h2>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Enter your value here"
          name="qr-code"
          value={input}
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleQrCodeGenerator}
        >
          Generate
        </button>
      </div>
      <QRCode id="qu-code-id" value={qrCode} size={400} bgColor="#fff" />
    </div>
  );
};

export default QRCodeGenerator;
