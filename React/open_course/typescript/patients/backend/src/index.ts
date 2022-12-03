import express from 'express';
import routes from './routes';
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 3001;

app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
