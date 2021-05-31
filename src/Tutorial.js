import { Card } from "react-bootstrap";

function Tutorial() {
  return (
    <>
      <Card>
        <Card.Header className="centerText" as="h5">
          Tutorial
        </Card.Header>
        <Card.Body>
          <Card.Title>Introduction</Card.Title>
          <Card.Text>
            <p>
              The purpose of the game is to see how many article links it takes
              to get from your starting article to the Philosophy Wikipedia
              article.
            </p>
            <ol>
              <li>
                Enter a topic into the input form. If entering more than one
                word, separate the words by a "_" character. Hit the submit
                button. If an article cannot be matched, you will be prompted to
                enter a new topic.
              </li>
              <li>
                A new screen will appear with button on the left side, and a
                summary of the articles chosen on the right side. Button on the
                left are the article links within the current article. Buttons
                with a green outline will be closer to the Philosophy article
                than buttons with a blue outline.
              </li>
              <li>
                Clicking on one of the buttons will load that articles links,
                and generate a new list of links to choose from. Continue this
                process until the Philosophy page has been reached.
              </li>
            </ol>
          </Card.Text>
          <Card.Title>Going Back or Restarting</Card.Title>
          <Card.Text>
            <ul>
              <li>
                If you ever need to go back one article, there is a back button
                at the bottom of the article links. This will take you back to
                the previous article.
              </li>
              <li>
                If you want to restart completely, click the restart button in
                the navigation bar.
              </li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
      {/* <h1 className="centerText">Tutorial</h1>
      <h3>Introduction</h3>
      <p>
        The purpose of the game is to see how many article links it takes to get
        from your starting article to the Philosophy Wikipedia article.
      </p>
      <ol>
        <li>
          Enter a topic into the input form. If entering more than one word,
          separate the words by a "_" character. Hit the submit button. If an
          article cannot be matched, you will be prompted to enter a new topic.
        </li>
        <li>
          A new screen will appear with button on the left side, and a summary
          of the articles chosen on the right side. Button on the left are the
          article links within the current article. Buttons with a green outline
          will be closer to the Philosophy article than buttons with a blue
          outline.
        </li>
        <li>
          Clicking on one of the buttons will load that articles links, and
          generate a new list of links to choose from. Continue this process
          until the Philosophy page has been reached.
        </li>
      </ol>
      <h3>Going Back or Restarting</h3>
      <ul>
        <li>
          If you ever need to go back one article, there is a back button at the
          bottom of the article links. This will take you back to the previous
          article.
        </li>
        <li>
          If you want to restart completely, click the restart button in the
          navigation bar.
        </li>
      </ul> */}
    </>
  );
}

export default Tutorial;
