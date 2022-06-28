const list = [
  {
    id: 1,
    nome: "ir ao mercado",
    prioridade: "baixa",
  },
  {
    id: 2,
    nome: "beber água",
    prioridade: "média",
  },
  {
    id: 3,
    nome: "estudar",
    prioridade: "alta",
  },
];

let idNewTask = 4;

const findAll = () => list;

const findById = (id) => {
  let indice = 0;

  const taskbyid = list.map((task, index) => {
    if (task.id === id) {
      indice = index;
      return task;
    }
  });
  return taskbyid[indice];
};

const create = (newTask) => {
  newTask.id = idNewTask;
  idNewTask++;
  list.push(newTask);
  return newTask;
};

const update = (id, updatedTask) => {

  list.forEach((task, index) => {
    if (task.id === id) {
      updatedTask.id = id;
      list[index] = updatedTask;
    }
  });
  return list;
};

const deleteTask = (id) => {
  list.forEach((task, index) => {
    if (task.id === id) {
      list.splice(index, 1);
    }
  });
};

module.exports = {
  findAll,
  findById,
  create,
  update,
  deleteTask,
};
