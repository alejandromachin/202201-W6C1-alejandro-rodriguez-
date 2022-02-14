import { addTaskThunk, loadTasksThunk } from "./tasksThunks";

describe("Given a loadTasksThunk function", () => {
  describe("When it is called", () => {
    test("Then it should call the dispatch function with the loadTaskAction", async () => {
      const dispatch = jest.fn();

      await loadTasksThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a addTaskThunk inner function", () => {
  describe("When it is called", () => {
    test("Then it should add one tast given to the state", async () => {
      const dispatch = jest.fn();
      const task = { name: "test1" };

      const thunkFunction = addTaskThunk(task);

      await thunkFunction(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
