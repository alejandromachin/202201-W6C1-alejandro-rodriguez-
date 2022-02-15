import {
  addTaskThunk,
  deleteTaskThunk,
  loadTasksThunk,
  toggleTaskThunk,
} from "./tasksThunks";

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
describe("Given a deleteTaskThunk inner function", () => {
  describe("When it is called with an id", () => {
    test("Then it should return the new state without the task", async () => {
      const dispatch = jest.fn();
      const task = { id: 1, name: "test1" };

      const thunkFunction = deleteTaskThunk(task.id);

      await thunkFunction(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When it is called with an id 10 that doesnt exist", () => {
    test("Then it should return the new state without the task", async () => {
      const dispatch = jest.fn();
      const task = { id: 10, name: "test1" };

      const thunkFunction = deleteTaskThunk(task.id);

      await thunkFunction(dispatch);

      expect(dispatch).not.toHaveBeenCalled();
    });
  });
});
describe("Given a toggleTaskThunk inner function", () => {
  describe("When it is called with a task that is not done", () => {
    test("Then it should call the dispatch with the task", async () => {
      const dispatch = jest.fn();
      const task = { id: 1, name: "test1", done: false };

      const thunkFunction = toggleTaskThunk(task);

      await thunkFunction(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
