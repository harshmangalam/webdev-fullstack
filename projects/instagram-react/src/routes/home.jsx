import { VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import PostCard from "../components/post-card";

export default function Home() {
  const [posts, setPosts] = useState([]);

  async function fetchPosts() {
    try {
      const res = await fetch("http://localhost:3000/posts");
      const json = await res.json();

      setPosts(json.posts);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <VStack spacing="4">
      {posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </VStack>
  );
}
