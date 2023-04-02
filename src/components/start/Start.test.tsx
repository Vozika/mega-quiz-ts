import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Start from "./Start";
import { store } from "../../store";
import { Provider } from "react-redux";

test("renders start quiz and options buttons, checks the number of buttons", () => {
  const mock = jest.fn();

  render(
    <Provider store={store}>
      <Start startQuiz={mock} toLocalStorage={mock} preloadImage={mock} />
    </Provider>
  );
  const startQuiz = screen.getByText(/start quiz/i);
  const options = screen.getByText(/options/i);
  const buttons = screen.getAllByRole("button");
  expect(startQuiz).toBeInTheDocument();
  expect(options).toBeInTheDocument();
  expect(buttons).toHaveLength(5);
});

test("renders title", () => {
  const mock = jest.fn();

  render(
    <Provider store={store}>
      <Start startQuiz={mock} toLocalStorage={mock} preloadImage={mock} />
    </Provider>
  );
  const title = screen.getByText(/capital quiz/i);
  expect(title).toBeInTheDocument();
});

test("runs startQuiz", () => {
  const mock = jest.fn();

  render(
    <Provider store={store}>
      <Start startQuiz={mock} toLocalStorage={mock} preloadImage={mock} />
    </Provider>
  );

  const button = screen.getByText(/start quiz/i);
  user.click(button);
  expect(mock).toHaveBeenCalled();
});
