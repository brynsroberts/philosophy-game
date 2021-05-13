import { Form, Col, Button } from "react-bootstrap";
import { useState } from "react";

const article = {
  title: "Nema_Halt_railway_station",
  first_sentence: "This is the first sample sentence of a sample page",
  self: "https://en.wikipedia.org/wiki/Nema_Halt_railway_station",
  links: [
    "https://en.wikipedia.org/wiki/Nema_Halt_railway_station",
    "https://en.wikipedia.org/wiki/National_Highway_22_(India)",
    "https://en.wikipedia.org/wiki/India",
    "https://en.wikipedia.org/wiki/Buddhist_philosophy",
    "https://en.wikipedia.org/wiki/Philosophy",
  ],
};

function GetURL(props) {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.currentTarget.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    props.setArticles((prevState) => {
      return [...prevState, { ...article }];
    });
  };

  return (
    <Form onSubmit={handleClick} className="myForm form-inline">
      <Form.Row className="align-items-center">
        <Col xs="auto" sm="12" md="auto">
          <Form.Control
            className="mb-2"
            id="inlineFormInput"
            placeholder="Wikipedia Article URL"
            value={input}
            onChange={handleChange}
          />
        </Col>
        <Col sm="12" md="auto">
          <Button type="submit" className="mb-2 center-block">
            Submit
          </Button>
        </Col>
      </Form.Row>
    </Form>
  );
}

export default GetURL;
