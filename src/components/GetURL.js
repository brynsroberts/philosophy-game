import { Form, Col, Button, Spinner } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

function GetURL(props) {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [formText, setFormText] = useState("search article");

  const handleChange = (event) => {
    setInput(event.currentTarget.value);
  };

  const handleClick = async (event) => {
    event.preventDefault();
    setLoading(true);
    const res = await axios.get("/article", {
      params: {
        input: input,
      },
    });
    if (
      res.data["article_links"][0] !==
        "https://en.wikipedia.org/wiki/Free_content" &&
      res.data["article_links"][0] !==
        "https://en.wikipedia.org/wiki/Case_sensitivity"
    ) {
      props.setArticles((prevState) => {
        return [
          ...prevState,
          { ...res.data, self: res.data["article_links"][0] },
        ];
      });
      setFormText("search article");
    } else {
      setInput("");
      setFormText("article not found");
    }
    setLoading(false);
  };

  return (
    <Form onSubmit={handleClick} className="myForm form-inline">
      <Form.Row className="align-items-center">
        <Col xs="auto" sm="12" md="auto">
          {!loading && (
            <Form.Control
              className="mb-2"
              id="inlineFormInput"
              placeholder={formText}
              value={input}
              onChange={handleChange}
            />
          )}
        </Col>
        <Col sm="12" md="auto">
          {!loading && (
            <Button type="submit" className="mb-2 center-block">
              Submit
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
  );
}

export default GetURL;
