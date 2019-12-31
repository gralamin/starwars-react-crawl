import React from "react";
import { render, wait } from "@testing-library/react";
import Crawl from "./Crawl";
import data from "./data.json";

const { test: testData } = data;
const testText = testData.text.split("\n");
const getTestKey = () => {
  return Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, "")
    .substr(0, 5);
};

test("renders Crawl intro text", () => {
  const { getByText } = render(
    <Crawl
      episodeNumberText={testData.episodeNumberText}
      episodeTitle={testData.episodeTitle}
      timeout={1}
    >
      {testText.map(child => {
        return <div key={getTestKey()}>{child}</div>;
      })}
    </Crawl>
  );
  const el = getByText(/galaxy far, far away/i);
  expect(el).toBeInTheDocument();
});

test("renders Crawl episodeNumber", () => {
  const { getByText } = render(
    <Crawl
      episodeNumberText={testData.episodeNumberText}
      episodeTitle={testData.episodeTitle}
      timeout={1}
    >
      {testText.map(child => {
        return <div key={getTestKey()}>{child}</div>;
      })}
    </Crawl>
  );
  const el = getByText(/Episode V/i);
  expect(el).toBeInTheDocument();
});

test("renders Crawl episodeTitle", () => {
  const { getByText } = render(
    <Crawl
      episodeNumberText={testData.episodeNumberText}
      episodeTitle={testData.episodeTitle}
      timeout={1}
    >
      {testText.map(child => {
        return <div key={getTestKey()}>{child}</div>;
      })}
    </Crawl>
  );
  const el = getByText(/Strikes Back/i);
  expect(el).toBeInTheDocument();
});

test("renders Crawl Text", () => {
  const { getByText } = render(
    <Crawl
      episodeNumberText={testData.episodeNumberText}
      episodeTitle={testData.episodeTitle}
      timeout={1}
    >
      {testText.map(child => {
        return <div key={getTestKey()}>{child}</div>;
      })}
    </Crawl>
  );
  const el = getByText(/Death Star/i);
  expect(el).toBeInTheDocument();

  const el2 = getByText(/remote probes/i);
  expect(el2).toBeInTheDocument();

  expect(el.textContent).not.toEqual(el2.textContent);
});

test("Calls Crawl onEnd when done", async () => {
  const onEnd = jest.fn();
  render(
    <Crawl
      episodeNumberText={testData.episodeNumberText}
      episodeTitle={testData.episodeTitle}
      timeout={1}
      onEnd={onEnd}
    >
      {testText.map(child => {
        return <div key={getTestKey()}>{child}</div>;
      })}
    </Crawl>
  );
  await wait(() => expect(onEnd.mock.calls.length).toBe(1));
});
