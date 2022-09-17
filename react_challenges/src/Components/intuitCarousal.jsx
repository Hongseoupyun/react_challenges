import React from 'react'
import { useEffect, useState } from "react";

export default function IntuitCarousal() {
  // const [item, setItem] = React.useState('thing');

  const [page, setPage] = useState(0);
  const [image, setImage] = useState("");

  const getImages = function () {
    return ["https://i.pinimg.com/564x/99/0a/ef/990aef3250364aaf474ca69ba50a4f70.jpg",
      "https://i.pinimg.com/564x/bf/5a/10/bf5a10df958a84db998acc9fea1b99d7.jpg",
      "https://i.pinimg.com/564x/76/5a/23/765a23c192aa807842710bd257e262c5.jpg",
      "https://i.pinimg.com/564x/03/34/69/03346934eeebaa9fd89cde1e2c1727f2.jpg"
    ]
  }

  useEffect(() => {
    getImages().then((img) => {
      setImage(img);
    });
  }, []);

  const handleClick = function () {
    if (page < image.length - 1) {
      setPage(page + 1);
    } else {
      setPage(0);
    }
  };

  return (
    <div>
      <img src={image[page]} onClick={handleClick} />
    </div>
  );
}
