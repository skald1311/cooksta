import styled from "styled-components";
import PostCard from "../../ui/PostCard";
import { useEffect, useState } from "react";
import { getPosts } from "../../services/apiPost";

const SeparateBar = styled.div`
  width: 100%;
  height: 0.5px;
  background-color: var(--color-grey-200);
  margin: 5px;
`;

const StyledFeedContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
`;

function FeedContainer() {
  const [posts, setPosts] = useState([]);

  useEffect(function () {
    const fetchPosts = async () => {
      const data = await getPosts();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <StyledFeedContainer>
      {posts?.map((postID) => (
        <>
          <PostCard postID={postID} />
          <SeparateBar />
        </>
      ))}
    </StyledFeedContainer>
  );
}

export default FeedContainer;
