import React from "react";
import { Route, MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import CrawlEntry from "./CrawlEntry";

test("renders button by default", () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={["/crawl/test"]}>
      <Route path="/crawl/:id" children={props => <CrawlEntry {...props} />} />
    </MemoryRouter>
  );
  const el = getByText(/start/i);
  expect(el).toBeInTheDocument();
});
