import { useState } from "react";

export default function Radio() {
  const [checked, setChecked] = useState();
  return (
    <>
      <div>
        <label htmlFor="2022">2022</label>
        <input
          onChange={(e) => setChecked(e.target.value)}
          type="radio"
          name="year"
          id="2022"
          value="2022"
          checked={"2022" === checked}
        />
      </div>
      <div>
        <label htmlFor="2023">2023</label>
        <input
          onChange={(e) => setChecked(e.target.value)}
          type="radio"
          name="year"
          id="2023"
          value="2023"
          checked={"2023" === checked}
        />
      </div>

      <div>{checked}</div>
    </>
  );
}
