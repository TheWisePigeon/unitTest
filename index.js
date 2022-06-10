import express from 'express';
import router from './root.js';
const app = express();
const port = 3000;

app.use('/v1', router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
