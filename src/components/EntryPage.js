import { Form, Col, Button, Spinner } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

function EntryPage(props) {
  const [loading, setLoading] = useState(false);

  const handleClick = async (event) => {
    event.preventDefault();
    setLoading(true);
    const res = await axios.get("/article");
    props.setArticles((prevState) => {
      return [
        ...prevState,
        { ...res.data, self: res.data["article_links"][0] },
      ];
    });
    setLoading(false);
  };

  return (
    <div className="home">
      <h1>Wikipedia Game</h1>
      <h5>How many articles does it take to reach the Philosophy page?</h5>
      <Form
        onSubmit={handleClick}
        className="form-inline justify-content-center"
      >
        <Form.Row className="align-items-center">
          <Col sm="12" md="auto">
            {!loading && (
              <Button
                variant="outline-secondary"
                type="submit"
                className="mb-2"
              >
                Get Random Starting Article
              </Button>
            )}
            {loading && (
              <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            )}
          </Col>
        </Form.Row>
      </Form>
    </div>
  );
}

export default EntryPage;
