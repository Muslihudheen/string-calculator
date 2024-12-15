// File: src/tests/Integration.test.ts
import { render, screen, fireEvent } from "@testing-library/react";
import Calculator from "../components/Calculator";
import React from "react";

describe("Calculator Integration Tests", () => {
  test("should calculate the sum of input and display the result", () => {
    render(React.createElement(Calculator));
;

    const textarea = screen.getByPlaceholderText(
      /enter your expression/i
    ) as HTMLTextAreaElement;
    const calculateButton = screen.getByText(/calculate/i);
    const resultDisplay = screen.getByText(/result:/i);

    fireEvent.change(textarea, { target: { value: "1+2" } });
    fireEvent.click(calculateButton);

    expect(resultDisplay.textContent).toContain("3");
  });

  test("should show error for invalid input", () => {
    render(React.createElement(Calculator));


    const textarea = screen.getByPlaceholderText(
      /enter your expression/i
    ) as HTMLTextAreaElement;
    const calculateButton = screen.getByText(/calculate/i);

    fireEvent.change(textarea, { target: { value: "1++" } });
    fireEvent.click(calculateButton);

    const errorDisplay = screen.getByText(/result:/i);
    expect(errorDisplay.textContent).toContain("");
  });

  test("should clear input and history on reset", () => {
    render(React.createElement(Calculator));


    const textarea = screen.getByPlaceholderText(
      /enter your expression/i
    ) as HTMLTextAreaElement;
    const resetButton = screen.getByText(/reset/i);
    const calculateButton = screen.getByText(/calculate/i);

    fireEvent.change(textarea, { target: { value: "1+2" } });
    fireEvent.click(calculateButton);
    fireEvent.click(resetButton);

    expect(textarea.value).toBe("");
    const history = screen.getByText(/history:/i);
    expect(history.textContent).toBe("History:");
  });

  test("should allow backspace to remove the last character", () => {
    render(React.createElement(Calculator));

    const textarea = screen.getByPlaceholderText(
      /enter your expression/i
    ) as HTMLTextAreaElement;
    const backspaceButton = screen.getByText(/backspace/i);

    fireEvent.change(textarea, { target: { value: "123" } });
    fireEvent.click(backspaceButton);

    expect(textarea.value).toBe("12");
  });

  test("should correctly update the history list", () => {
    render(React.createElement(Calculator));

    const textarea = screen.getByPlaceholderText(
      /enter your expression/i
    ) as HTMLTextAreaElement;
    const calculateButton = screen.getByText(/calculate/i);

    fireEvent.change(textarea, { target: { value: "1+2" } });
    fireEvent.click(calculateButton);

    const history = screen.getByText(/history:/i);
    expect(history.textContent).toContain("1+2 = 3");
  });
});
