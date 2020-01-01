import React from "react";
import { render } from "@testing-library/react";
import Audio from "./Audio";

test("renders Audio", () => {
  render(<Audio onCanPlay={jest.fn()} />);
});
