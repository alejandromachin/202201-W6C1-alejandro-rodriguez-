import actionsTypes from "../actions/actionsTypes";
import tasksReducer from "./tasksReducer";

describe("Given a tasksReducer function", () => {
  describe("When it is called with a an array of one task and the loadTasks action", () => {
    test("Then it should return the array as a newstate", () => {
      const tasks = [{ name: "test" }];
      const currentState = [];

      const action = {
        type: actionsTypes.loadTasks,
        tasks: tasks,
      };

      const newState = tasksReducer(currentState, action);

      expect(newState).toEqual(tasks);
    });
  });
});
