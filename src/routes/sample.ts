import { NextFunction, Response } from 'express';

export default function () {
	const operations = {
		get: get,
	};

	async function get(req: Request, res: Response, next: NextFunction) {
		res.status(200).send();
	}

	return operations;
}
