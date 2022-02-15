import { rest } from "msw";

export const handlers = [
  rest.get(process.env.REACT_APP_URLAPI, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { id: 1, name: "test1" },
        { id: 2, name: "test2" },
      ])
    );
  }),
  rest.post(process.env.REACT_APP_URLAPI, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([{ id: 1, name: "test1" }]));
  }),
  rest.delete(`${process.env.REACT_APP_URLAPI}1`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([{ id: 1, name: "test1" }]));
  }),
  rest.delete(`${process.env.REACT_APP_URLAPI}10`, (req, res, ctx) => {
    return res(ctx.status(404));
  }),
];
