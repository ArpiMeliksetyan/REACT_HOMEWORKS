import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "../Counter";

describe("Counter component", () => {
  it("should render correctly", () => {
    render(<Counter initialValue={7} />);
    expect(screen.getByRole("CounterComponent")).toBeTruthy();
  });
  it("should render initial value provided in props", () => {
    render(<Counter initialValue={7} />);
    expect(screen.queryByText("Count: 7")).toBeTruthy();
    expect(screen.queryByText("Count: 5")).toBeNull();
  });
  it("should decrement displayed value on click Decrement button", () => {
    render(<Counter initialValue={7} />);
    fireEvent.click(screen.getByRole("DecrementButton"));
    expect(screen.queryByText("Count: 6")).toBeTruthy();
  });
  it("should increment displayed value on click Increment button", () => {
    render(<Counter initialValue={7} />);
    fireEvent.click(screen.getByRole("IncrementButton"));
    expect(screen.queryByText("Count: 8")).toBeTruthy();
  });
});
