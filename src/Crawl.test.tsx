import { vi, expect, test, beforeEach, afterEach, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import data from "./data.json";
import Crawl from "./Crawl";
import { FC, Key } from "react";

const { test: testData } = data;

const testText = testData.text.split("\n");

interface ChildProps {
  key: Key;
  text: string;
}

const Child: FC<ChildProps> = ({ key, text }) => {
  return <div key={key}>{text}</div>;
};

const children = testText.map((child, index) => {
  return Child({ key: index, text: child });
});

const timeout = 1;
const episodeNumberText = testData.episodeNumberText;
const episodeTitle = testData.episodeTitle;
const introText = "In a galaxy far, far away";
const onEnd = () => {};

describe("Testing Crawl", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  test("renders Crawl intro text", async () => {
    render(
      <Crawl
        timeout={timeout}
        onEnd={onEnd}
        introText={introText}
        episodeNumberText={episodeNumberText}
        episodeTitle={episodeTitle}
        children={children}
      />,
    );
    const el = screen.getByText(/galaxy far, far away/i);
    expect(el).toBeDefined();
  });

  test("renders Crawl episodeNumber", async () => {
    render(
      <Crawl
        timeout={timeout}
        onEnd={onEnd}
        introText={introText}
        episodeNumberText={episodeNumberText}
        episodeTitle={episodeTitle}
        children={children}
      />,
    );
    const el = screen.getByText(/Episode V/i);
    expect(el).toBeDefined();
  });

  test("renders Crawl episodeTitle", async () => {
    render(
      <Crawl
        timeout={timeout}
        onEnd={onEnd}
        introText={introText}
        episodeNumberText={episodeNumberText}
        episodeTitle={episodeTitle}
        children={children}
      />,
    );
    const el = screen.getByText(/Strikes Back/i);
    expect(el).toBeDefined();
  });

  test("renders Crawl text", async () => {
    render(
      <Crawl
        timeout={timeout}
        onEnd={onEnd}
        introText={introText}
        episodeNumberText={episodeNumberText}
        episodeTitle={episodeTitle}
        children={children}
      />,
    );
    const el = screen.getByText(/Death Star/i);
    expect(el).toBeDefined();

    const el2 = screen.getByText(/remote probes/i);
    expect(el2).toBeDefined();

    expect(el.textContent).not.toEqual(el2.textContent);
  });

  test("Calls crawl onEnd when done", async () => {
    const newEnd = vi.fn();
    render(
      <Crawl
        timeout={timeout}
        onEnd={newEnd}
        introText={introText}
        episodeNumberText={episodeNumberText}
        episodeTitle={episodeTitle}
        children={children}
      />,
    );

    vi.advanceTimersByTime(2);
    expect(newEnd.mock.calls.length).toEqual(1);
  });
});
