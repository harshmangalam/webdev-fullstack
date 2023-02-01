import "./App.css";
import User from "./components/User";
function App() {
  return (
    <div>
      <User
        name="Harsh Mangalam"
        profileImage="https://avatars.githubusercontent.com/u/57381638?v=4"
        email="harsh@gmail.com"
        loggedIn="No"
      >
        <p> js uysagxy sgysgf uy gsayuxguisguysgdyuqwg dyuwqg ydwg yd</p>
      </User>
      <User
        name="Ram"
        profileImage="https://images.unsplash.com/photo-1675256903382-0365348c0c7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        email="ram@gmail.com"
        loggedIn="Yes"
      />

      <User name="Shyam" loggedIn="No" email="shyam@gmail.com" />
    </div>
  );
}

export default App;
