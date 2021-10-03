import { TasksRepositoryFake } from "../../fixture/TasksRepositoryFake";
import { SimpleUpdateTaskCommand } from "../../../src/commands/UpdateTaskCommand";

describe("The update task command should", () => {
  const repository = new TasksRepositoryFake();
  const command = new SimpleUpdateTaskCommand(repository);

  it("invoke the repository to save the newly updated task", () => {
    command.execute(2, undefined, "This is an update to the task description");

    expect(repository.wasCalled()).toEqual(2);
  })
})