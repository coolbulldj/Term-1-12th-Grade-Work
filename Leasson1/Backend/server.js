import express from 'express';
import fs from 'fs'
import path from 'path'

import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
    
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const frontend_path = path.join(__dirname, "..", "Frontend");

app.use(
    express.static(frontend_path),
)

app.get('/', (_, res) => {
    res.sendFile(path.join(frontend_path, 'home.html'));
})