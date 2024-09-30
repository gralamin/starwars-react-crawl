import { vi, expect, test, describe, beforeEach, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import CrawlEntry from "./CrawlEntry";
import _data from "./data.json";
import { DataJson } from "./CrawlData";

const data = _data as DataJson;
const testData = data["test"];

describe("Crawl Entry tests", () => {
    beforeEach(() => {
        vi.useFakeTimers();
      });
    
      afterEach(() => {
        vi.useRealTimers();
      });
    

  test("renders loader by default", () => {
    render(
        <CrawlEntry 
            crawlData={testData}
        />
    )
    const el = screen.getByTestId(/loader/i);
    expect(el).toBeDefined();
  });

  test("After finishing loading, shows start button", () => {
    render(
        <CrawlEntry 
            crawlData={testData}
        />
    )
    vi.advanceTimersByTime(2000);
    const el = screen.getByTestId(/loader/i);
    expect(el).toBeDefined();
  });
});
