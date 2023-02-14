import { VStack } from "@chakra-ui/react";
import PostCard from "../components/post-card";
import { useQuery } from "@tanstack/react-query";
export default function Home() {
  const postsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  async function fetchPosts() {
    const res = await fetch("http://localhost:3000/posts");
    return await res.json();
  }

  if (postsQuery.isLoading) {
    return <p>Fetching posts...</p>;
  }

  if (postsQuery.isError) {
    console.log(postsQuery.error);
    return <p>There is some problem in fetching posts.</p>;
  }

  return (
    <VStack spacing="4">
      {postsQuery.data?.posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </VStack>
  );
}
