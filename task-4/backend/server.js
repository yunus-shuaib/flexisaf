import jsonServer from 'json-server';
import path from 'path';
import { fileURLToPath } from 'url';

const server = jsonServer.create();

// Create your own __dirname equivalent for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

// Use 5000 or fallback to Render's dynamic environment port
const port = process.env.PORT || 5000;

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
