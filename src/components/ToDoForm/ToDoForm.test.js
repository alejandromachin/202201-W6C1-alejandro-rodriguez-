import { screen } from "@testing-library/react";
import userEvents from "@testing-library/user-event";
import renderWithProviders from "../../setupTests";

import ToDoForm from "./ToDoForm";

describe("Given a ToDoForm component", () => {
  describe("When it is instantiated", () => {
    test("Then it should show an input and a button with the text add to submit", () => {
      renderWithProviders(<ToDoForm />);

      const input = screen.getByRole("textbox");
      const submitButton = screen.getByRole("button", { name: /add/i });
      userEvents.type(input);

      expect(input).toBeInTheDocument();
      expect(submitButton).toBeInTheDocument();
    });
  });
  describe("When it is clicked on the submit button", () => {
    test("Then it should call the action on submit", () => {
      renderWithProviders(<ToDoForm />);

      const submitButton = screen.getByRole("button", { name: /add/i });

      userEvents.click(submitButton);
    });
  });
});
