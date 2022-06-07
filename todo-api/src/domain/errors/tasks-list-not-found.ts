export class TasksListNotFoundError extends Error {
  constructor() {
    super('TASKS_LIST_NOT_FOUND')
    this.name = 'TASKS_LIST_NOT_FOUND'
  }
}
