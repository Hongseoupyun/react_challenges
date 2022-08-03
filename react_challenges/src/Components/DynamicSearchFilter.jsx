import React from 'react'

function DynamicSearchFilter() {
  const [searchTerm, setSearchTerm] = useState("");
  console.log(searchTerm);

  return (
    <div className="App">
      <h1>Search Filter</h1>
      <input
        type="text"
        placeholder="Search"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      ></input>
      {JSONDATA.filter((val) => {
        if (searchTerm === "") {
          return val;
        } else if (
          val.first_name.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return val;
        }
      }).map((data, key) => {
        return <p key={key}>{data.first_name}</p>;
      })}
    </div>
  );
}

export default DynamicSearchFilter