import { useState, useEffect } from "react";

function GithubUser() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  async function fetchUserDetails(username) {
    setLoading(true);
    const res = await fetch("https://api.github.com/users/harshmangalam");
    const data = await res.json();
    setUser(data);
    setLoading(false);
  }

  useEffect(() => {
    console.log("Github user component mount");
    fetchUserDetails("harshmangalam");

    return () => {
      console.log("Github user component unmount");
    };
  }, []);

  return (
    <div>
      {loading && <p>Loading....</p>}
      {user && <h3>{user.name}</h3>}
    </div>
  );
}

export default GithubUser;
