import React from "react";
import { Route, MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import CrawlEntry from "./CrawlEntry";

test("renders loader by default", () => {
  const { getByTestId } = render(
    <MemoryRouter initialEntries={["/crawl/test"]}>
      <Route path="/crawl/:id" children={props => <CrawlEntry {...props} />} />
    </MemoryRouter>
  );
  const el = getByTestId(/loader/i);
  expect(el).toBeInTheDocument();
});
