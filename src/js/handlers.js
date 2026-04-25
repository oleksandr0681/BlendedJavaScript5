import { nanoid } from 'nanoid';
import { addTask } from './render-tasks';
import { refs } from './refs';
import { saveTaskToLocalStorage } from './local-storage-api';

export function handleHeaderFormSubmit(event) {
  event.preventDefault();

  const { taskName, taskDescription } = event.target.elements;
  const taskNameValue = taskName.value.trim();
  const taskDescriptionValue = taskDescription.value.trim();

  if (taskNameValue === '' || taskDescriptionValue === '') {
    console.log('Inputs are empty.');
    return;
  }

  const task = {
    id: nanoid(),
    name: taskNameValue,
    description: taskDescriptionValue,
  };
  saveTaskToLocalStorage(task);
  addTask(task);
  refs.headerForm.reset();
}
