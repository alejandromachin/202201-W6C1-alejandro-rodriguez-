import { render, screen } from "@testing-library/react";
import ToDo from "./toDo";

describe("Given a ToDo component", () => {
  describe("When it is rendered with the a task", () => {
    test("Then it should render a link with the name of the task", () => {
      const task = { name: "test" };

      render(<ToDo task={task} />);

      const nameOftheTask = screen.getByRole("link", { name: task.name });

      expect(nameOftheTask).toBeInTheDocument();
    });
  });
});
