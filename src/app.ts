import 'module-alias/register';

import express from 'express';
import cors from 'cors';
import { initialize } from 'express-openapi';
import apidoc from './apidoc';
import http2 from 'http2';

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

const openapi = initialize({
	apiDoc: apidoc,
	app,
	paths: './dist/routes',
	routesGlob: '**/*.{ts,js}',
	routesIndexFileRegExp: /(?:index)?\.[tj]s$/,
	dependencies: {},
});

process.on('SIGTERM', () => {});
