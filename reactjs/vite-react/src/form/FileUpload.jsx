import { useRef } from "react";

export default function FileUpload() {
  const fileRef = useRef(null);
  function handleFileUpload(e) {
    fileRef.current = e.target.files[0];
  }
  return (
    <div>
      <input type="file" name="file" onChange={handleFileUpload} />

      <button onClick={() => console.log(fileRef.current)}>Upload file</button>
    </div>
  );
}
