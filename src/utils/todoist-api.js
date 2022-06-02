const todoistApiConfig = {
  baseUrl: 'https://api.todoist.com/rest/v1',
  headers: {
    'Authorization': 'Bearer 793d9154e5507916cddbc96268c87fd082c634c6',
    'Content-Type': 'application/json'
  }
}

const getResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`ошибка ${res.status}`);
}

export const getProjectTasks = () => {
  return fetch(`${todoistApiConfig.baseUrl}/tasks?project_id=2275720465`, {
    headers: todoistApiConfig.headers
  }).then(getResponse)
}

export const addTask = (taskText) => {
  return fetch(`${todoistApiConfig.baseUrl}/tasks`, {
    method: 'POST',
    headers: todoistApiConfig.headers,
    body: JSON.stringify({
      content: taskText,
      project_id: '2275720465'
    })
  }).then(getResponse)
}

export const deleteTaskById = (taskId) => {
  return fetch(`${todoistApiConfig.baseUrl}/tasks/${taskId}`, {
    method: 'DELETE',
    headers: todoistApiConfig.headers,
  }).then((res) => {
    if (!res.ok) return Promise.reject(`ошибка ${res.status}`);
  })
}
