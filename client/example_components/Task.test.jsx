import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { expect, it, afterEach } from "vitest";
import { RecoilRoot } from "recoil";
import Task from "./Task.jsx";

afterEach(cleanup);

it("renders description", () => {
  const task = { id: 5, description: "do the dishes" };
  const subject = render(
    <RecoilRoot>
      <Task task={task} />
    </RecoilRoot>
  ).queryByText("do the dishes");
  expect(subject).toBeTruthy();
});

it("turns editable when clicked", () => {
  const task = { id: 5, description: "walk the dog" };
  const subject = render(
    <RecoilRoot>
      <Task task={task} />
    </RecoilRoot>
  );
  fireEvent.click(subject.getByText("walk the dog"));
  const input = subject.getByLabelText(/description/i);
  expect(input.name).toBe("description");
});
