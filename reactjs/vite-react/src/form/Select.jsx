import { useState } from "react";

export default function Select() {
  const [selected, setSelected] = useState("TShirt");
  return (
    <>
      <select value={selected} onChange={(e) => setSelected(e.target.value)}>
        <option value="Book">Book</option>
        <option value="TShirt">T-Shirt</option>
      </select>

      <div>{selected}</div>
    </>
  );
}
