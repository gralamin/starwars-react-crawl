import { vi, test, describe } from "vitest";
import { render } from "@testing-library/react";
import Audio from "./Audio";

describe("Audio Testing", () => {
  test("renders Audio", () => {
    render(<Audio onCanPlay={vi.fn()} />);
  });
});
