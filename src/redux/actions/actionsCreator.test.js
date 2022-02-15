import {
  addTaskAction,
  loadTasksAction,
  toggleTaskAction,
} from "./actionsCreator";
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
describe("Given a addTask function", () => {
  describe("When it is called with a task", () => {
    test("then it should return an object with the action and the task", () => {
      const task = { name: "test" };

      const expectedAction = {
        type: actionsTypes.addTask,
        task: task,
      };

      const action = addTaskAction(task);

      expect(action).toEqual(expectedAction);
    });
  });
});
describe("Given a toggleTask function", () => {
  describe("When it is called with a task", () => {
    test("then it should return an object with the action and the id of the task", () => {
      const task = { name: "test", id: 1 };

      const expectedAction = {
        type: actionsTypes.toggleTask,
        id: task.id,
      };

      const action = toggleTaskAction(task.id);

      expect(action).toEqual(expectedAction);
    });
  });
});
