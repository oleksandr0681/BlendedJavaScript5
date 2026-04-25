export function getTasksFromLocalStorage() {
  try {
    return JSON.parse(localStorage.getItem('tasks')) ?? [];
  } catch (error) {
    console.error(error);
  }
}

export function saveTaskToLocalStorage(task) {
  const tasks = getTasksFromLocalStorage();
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
