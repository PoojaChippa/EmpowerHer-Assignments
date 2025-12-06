# Enhanced Todo List

A simple, enhanced Todo List web application built with **HTML, CSS, and JavaScript**.

It supports:

- Adding tasks
- Marking tasks as completed (with visual indication)
- Deleting tasks
- Real-time search
- Persistent storage using `localStorage`

---

## Features

- **Add Tasks**  
  Type a task in the input box and click **Add Task** or press **Enter**.

- **Mark as Completed**  
  Click the checkbox next to a task. Completed tasks show:

  - Line-through text
  - Faded color

- **Delete Tasks**  
  Click the **Delete** button to remove a task from the list and from `localStorage`.

- **Real-time Search**  
  Use the **Search tasks...** input to filter tasks as you type.  
  Only matching tasks are displayed.

- **Persistent Storage**  
  Tasks are stored in `localStorage` under the key:

  ```text
  enhancedTodoTasks
  ```

- **Each task is saved as an object: **
  {
  "id": "unique-id",
  "text": "Task description",
  "completed": false
  }
