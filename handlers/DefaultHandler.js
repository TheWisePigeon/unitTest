import {} from 'express';

const Tasks = [
  {
    name: 'Task1',
    status: 'Done',
  },
  {
    name: 'Task2',
    status: 'Pending',
  },
  {
    name: 'Task3',
    status: 'Done',
  },
  {
    name: 'Task4',
    status: 'Pending',
  },
];

const onGet = async (req, res, next) => {
  return res.json({
    status: 'OK',
    tasks: Tasks,
  });
};

const Handler = { onGet };
export default Handler;
