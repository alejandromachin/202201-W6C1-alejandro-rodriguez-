import { screen } from "@testing-library/react";
import App from "./App";
import renderWithProviders from "./setupTests";

describe("Given an App component", () => {
  describe("When it is instantiated", () => {
    test("Then it should render a form", () => {
      const text = "Task:";
      renderWithProviders(<App />);

      const form = screen.getByRole("textbox", { name: text });

      expect(form).toBeInTheDocument();
    });
    test("Then it should render a list of tasks", () => {
      renderWithProviders(<App />);

      const form = screen.getByRole("list");

      expect(form).toBeInTheDocument();
    });
  });
});
