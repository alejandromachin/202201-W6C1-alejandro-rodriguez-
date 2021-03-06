import { screen } from "@testing-library/react";
import renderWithProviders from "../../setupTests";
import ToDoList from "./ToDoList";

describe("Given a ToDoList component", () => {
  describe("When it is rendered with an array of 2 tasks", () => {
    test("Then it should show a list with the two tasks", () => {
      const tasks = [{ name: "task1" }, { name: "task2" }];

      renderWithProviders(<ToDoList tasks={tasks} />);

      const listOfTasks = screen.getAllByRole("listitem").length;

      expect(listOfTasks).toBe(tasks.length);
    });
  });
});
