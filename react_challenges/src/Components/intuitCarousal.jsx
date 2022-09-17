import { useEffect, useState } from "react";

function Carousel() {
  // const [item, setItem] = React.useState('thing');

  const [page, setPage] = useState(0);
  const [image, setImage] = useState("");

  const getImages = function(){
    //returns image in arrays
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
