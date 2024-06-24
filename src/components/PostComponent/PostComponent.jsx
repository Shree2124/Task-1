import React, { useEffect, useState } from "react";
import { PostCard } from "../index.js";
import { SamplePosts } from "../../constants/SampleData.js";
import "./PostComponent.css"

const PostComponent = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(SamplePosts);
  }, []);

  return SamplePosts.length > 0 ? (
    <div className="posts-center position-relative ">
      <div className="d-flex d-lg-none w-100 position-absolute top-4 align-items-center justify-content-between custom-main-button">
        <div className="text-main-posts">Posts(368)</div>
        <button className="btn btn-filter d-flex align-items-center gap-2">
          Filter : All{" "}
          <img
            src="data:image/svg+xml,%3csvg%20width='22'%20height='22'%20viewBox='0%200%2022%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='baseline-arrow_drop_down-24px'%20clip-path='url(%23clip0_1_1136)'%3e%3cpath%20id='Vector'%20d='M6.41667%209.16669L11%2013.75L15.5833%209.16669H6.41667Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_1136'%3e%3crect%20width='22'%20height='22'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
            alt="arrowdown"
            width="20"
            height="20"
          />
        </button>
      </div>
      <main className="d-flex flex-column gap-4 " >

      {posts.map((i, ind) => (
        <PostCard key={ind} post={i} />
      ))}
      </main>
    </div>
  ) : (
    <div>Posts are not available</div>
  );
};

export default PostComponent;
