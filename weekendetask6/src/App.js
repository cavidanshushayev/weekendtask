import { useState, useEffect } from "react";
import { Card, Col, Row, Spin } from "antd";

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <div style={{ margin: "20px 0" }}>
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
       
        <Row gutter={[16, 16]}>
          {filteredData.map((item) => (
            <Col key={item.id} xs={24} sm={12} md={8} lg={6}>
              <Card
                hoverable
                cover={<img alt={item.title} src={item.url} />}
              >
                <Card.Meta title={item.title} />
              </Card>
            </Col>
          ))}
        </Row>
      
    </div>
  );
}

export default App;
