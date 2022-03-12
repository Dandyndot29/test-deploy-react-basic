import axios from "axios";
import CatItem from "./CatItem";
import { useState, useEffect } from "react";
import { Container, InputGroup, Card, Row, Col } from "react-bootstrap";

const CatList = () => {
  const [cats, catsTemp] = useState([]);
  const [inputSearch, setInputSearch] = useState("");

  useEffect(async () => {
    const result = await axios.get("https://api.thecatapi.com/v1/breeds");

    catsTemp(result.data);
  }, []);


  return (
    <>
     <br>
     </br>
     <br>
     </br>
      <input
        type="text" placeholder="Search cats..."
        onChange={(event) => setInputSearch(event.target.value)}
      />
     <br>
     </br>
     <br>
     </br> 
      {cats
        .filter((cat) => {
          if 
          (inputSearch === "") {
            return cat;
          } else if (
            cat.name.toLowerCase().includes(inputSearch.toLowerCase())
          ) {
            return cat;
          }
        })
        .map((cat, index) => (
          <div key={index}>
            <CatItem cat={cat} />
          </div>
        ))}
    </>
  );
};

export default CatList;