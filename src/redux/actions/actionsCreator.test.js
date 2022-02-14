import { loadTasksAction } from "./actionsCreator";
import actionsTypes from "./actionsTypes";

describe("Given a loadTasksAction function", () => {
  describe("When it is called with a task", () => {
    test("then it should return an object with the action and the task", () => {
      const task = { name: "test" };

      const expectedAction = {
        type: actionsTypes.loadTasks,
        tasks: task,
      };

      const action = loadTasksAction(task);

      expect(action).toEqual(expectedAction);
    });
  });
});
