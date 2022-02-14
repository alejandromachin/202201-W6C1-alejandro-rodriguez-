import { rest } from "msw";

export const handlers = [
  rest.get(
    "https://alejandro-rodriguez-w6c1.herokuapp.com/todos",
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
          { id: 1, name: "test1" },
          { id: 2, name: "test2" },
        ])
      );
    }
  ),
];
