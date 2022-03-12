import { Container, InputGroup, Card, Row, Col } from "react-bootstrap";

const CatItem = ({cat}) => {
    const handleClick = (cat) => {
        alert(`${cat.name}`)
      };

  return (
    <Container fluid="md">
    <InputGroup size="lg" className="mb-4 mt-4 justify-content-md-center">
    <div onClick={() => handleClick(cat)}>
    <Row xs={1} md={4} className="g-4">
      <img src={cat.image?.url} alt="" width={200} height={200}></img>
      <div> <h2>Nama kucing</h2>
      <h4 style={{color: "blue"}}>{cat.name}</h4>
      </div>

      <div> <h2>Deskripsi</h2>
      <h6 style={{color: "white"}}>{cat.description}</h6>
      </div>

      <div> <h2>Asal Negara</h2>
      <h4 style={{color: "red"}}>{cat.origin}</h4> 
      </div>
    </Row>
    </div>
    </InputGroup>
    </Container>
    
  );
};

export default CatItem;