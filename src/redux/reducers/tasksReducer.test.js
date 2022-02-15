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
  describe("When it is called with a one task and the addTask action", () => {
    test("Then it should return the array with that task on it", () => {
      const task = { name: "test" };
      const currentState = [];

      const action = {
        type: actionsTypes.addTask,
        task: task,
      };

      const newState = tasksReducer(currentState, action).length;

      expect(newState).toBe(1);
    });
  });
  describe("When it is called with a an array of one task and an unknown action", () => {
    test("Then it should return the currentstate", () => {
      const tasks = [{ name: "test" }];
      const currentState = [];

      const action = {
        type: actionsTypes.loadTasksTest,
        tasks: tasks,
      };

      const newState = tasksReducer(currentState, action);

      expect(newState).toEqual(currentState);
    });
  });
  describe("When it is called without state and action", () => {
    test("Then it should return the currentstate", () => {
      const currentState = [];

      const newState = tasksReducer();

      expect(newState).toEqual(currentState);
    });
  });
  describe("When it is called with an array of two tasks as state and deleteTaskAction action", () => {
    test("Then it should return an array of only one task", () => {
      const currentState = [
        { id: 1, name: "test1" },
        { id: 2, name: "taks2" },
      ];
      const idTaskToDelete = 1;
      const action = {
        type: actionsTypes.deleteTask,
        id: idTaskToDelete,
      };
      const newState = tasksReducer(currentState, action);

      expect(newState.length).toBe(1);
    });
  });

  describe("When it is call with the action toggleTaskAction and a task that its not done", () => {
    test("Then it should return the same task but with the property done on true", () => {
      const currentState = [{ id: 1, name: "test1", done: false }];
      const idTaskToToggle = 1;
      const action = {
        type: actionsTypes.toggleTask,
        id: idTaskToToggle,
      };
      const newState = tasksReducer(currentState, action);

      expect(newState[0].done).toBe(true);
    });
  });
});
