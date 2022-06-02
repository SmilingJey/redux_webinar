
export const customMiddleware =
  () =>
  (store) =>
  (next) =>
  (action) => {
    console.log(action)

    return next(action);
  };
