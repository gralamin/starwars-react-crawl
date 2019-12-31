import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import data from "./data.json";
import CrawlEntry from "./CrawlEntry";
import "./index.css";

function App() {
  const sortedKeys = Object.keys(data).sort((entryA, entryB) => {
    const keyA = data[entryA].displayText || entryA;
    const keyB = data[entryB].displayText || entryB;
    return keyA.localeCompare(keyB);
  });

  return (
    <Router>
      <Switch>
        <Route
          path="/crawl/:id"
          children={props => <CrawlEntry {...props} />}
        />
        <Route path="/">
          <div className="card">
            <div className="card-inner">
              <h1>Crawls</h1>
              <ul>
                {sortedKeys.map(entry => {
                  return (
                    <li key={entry}>
                      <Link to={`/crawl/${entry}`}>
                        {data[entry].displayText || entry}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
