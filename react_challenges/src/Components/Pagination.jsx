import React from "react";
import { useState } from "react";
import jsonData from "../MOCK_DATA.json";

export default function Pagination() {

  const [users,setUsers] = useState(jsonData.slice(0,50))

  return <div>Pagination</div>;
}
