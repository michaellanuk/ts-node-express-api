import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req: Request, res: Response) => res.json({
	message: 'Hello from API',
}));

app.listen(port, () => {
	console.log(`API listening on port http://localhost:${port}`);
});
