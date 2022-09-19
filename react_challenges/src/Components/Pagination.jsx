import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
// import jsonData from "../MOCK_DATA.json";

export default function Pagination() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerpage] = useState(10);
  const url = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    const fetchedPost = async function () {
      setLoading(true);
      const res = await axios.get(url);
      setPosts(res);
      setLoading(false);
    };
    fetchedPost();
  }, []);

  console.log(posts)
  return (<div className="container mt-5">
    <h1 className="text-primary mb-3">Pagination...!</h1>
  </div>);
}
