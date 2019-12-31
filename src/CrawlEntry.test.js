import React from "react";
import { createMemoryHistory } from "history";
import { Route, Router } from "react-router-dom";
import { render } from "@testing-library/react";
import CrawlEntry from "./CrawlEntry";

test("renders button by default", () => {
  const history = createMemoryHistory();
  const { getByText } = render(
    <Router history={history}>
      <Route path="/:id">
        <CrawlEntry />
      </Route>
    </Router>,
    {
      route: "/test"
    }
  );
  const el = getByText(/start/i);
  expect(el).toBeInTheDocument();
});
