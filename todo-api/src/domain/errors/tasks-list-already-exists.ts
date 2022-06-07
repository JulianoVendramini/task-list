export class TasksListAlreadyExistsError extends Error {
  constructor() {
    super('TASKS_LIST_ALREADY_EXISTS')
    this.name = 'TASKS_LIST_ALREADY_EXISTS'
  }
}
