import { useState } from "react";

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  const [r, setR] = useState(0);
  const [g, setG] = useState(0);
  const [b, setB] = useState(0);

  const randomColorUtility = (length) => {
    return Math.floor(Math.random() * length);
  };

  const handleCreateRandomHexColor = () => {
    // HEX pattern : #678765
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }

    setColor(hexColor);
    setTypeOfColor("hex");
  };

  const handleCreateRandomRgbColor = () => {
    // RGB pattern : rgb(22, 97, 145)
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    let rgbColor = `rgb(${r}, ${g}, ${b})`;

    setR(r);
    setG(g);
    setB(b);

    setColor(rgbColor);
    setTypeOfColor("rgb");
  };

  const hexToRgb = (hexColor) => {
    if (typeOfColor === "hex") {
      // Remove the hash if it exists
      hexColor = hexColor.replace(/^#/, "");

      // Parse the hex value into separate R, G, B values
      let bigint = parseInt(hexColor, 16);
      let r = (bigint >> 16) & 255;
      let g = (bigint >> 8) & 255;
      let b = bigint & 255;

      // Return the RGB values as an object
      let rgbColor = `rgb(${r}, ${g}, ${b})`;
      setColor(rgbColor);
      setTypeOfColor("rgb");
    }
  };

  const rgbToHex = (r, g, b) => {
    if (typeOfColor === "rgb") {
      // Convert the RGB values to a hex string
      let hex = ((r << 16) | (g << 8) | b).toString(16).padStart(6, "0");

      // Add a hash sign
      let hexColor = `#${hex}`;
      setColor(hexColor);
      setTypeOfColor("hex");
    }
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button onClick={() => rgbToHex(r, g, b)}>Create HEX Color</button>
      <button onClick={() => hexToRgb(color)}>Create RGB Color</button>
      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
      >
        Generate Random Color
      </button>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50px",
          fontSize: "60px",
          color: "#ffffff",
        }}
      >
        <h3>{typeOfColor === "hex" ? "HEX Colour" : "RGB Colour"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
};

export default RandomColor;
