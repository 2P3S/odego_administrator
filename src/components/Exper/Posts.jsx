import React, { useState, useEffect } from "react";
import Pagination from "../Pagination";

const Posts = () => {
  // 게시글을 담는 변수
  const [posts, setPosts] = useState([]);
  // 한 페이지 보일 게시글
  const [limit, setLimit] = useState(10);
  // 현제 페이지
  const [page, setPage] = useState(1);
  // 옵셋
  const offset = (page - 1) * limit;

  // 첫 렌더링 할 때, 게시글을 가져오고 `posts`에 저장한다.
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div className="posts">
      {/* 게시글을 offset부터 limit만큼 보여준다.  */}
      {posts.slice(offset, offset + limit).map(({ id, title, body }) => (
        <article key={id}>
          <h1 className="text-2xl font-bold">
            {id}. {title}
          </h1>
          <p>{body}</p>
        </article>
      ))}
      <footer>
        <Pagination
          total={posts.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </footer>
    </div>
  );
};

export default Posts;
