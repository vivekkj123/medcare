

import express from'express';
import bodyParser from'body-parser';
import cookieParser from'cookie-parser';
import helmet from'helmet';
const app = express();
import dotenv from 'dotenv';
dotenv.config();
import {  vault } from './pangeaConfig.mjs';
import userRoute from './routes/userRoute.js'
 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(helmet());

app.get('/', (req, res) => {
  res.send('Welcome to Medcare API');
});

// Test Pangea service
app.get('/test-pangea-connection', async (req, res) => {
  try {
    console.log(vault);
    if (!vault) {
      console.log('Pangea is not connected or operational');
      return res.status(500).json({ message: 'Pangea is not connected or operational.' });
    } else {
      console.log(vault.token);
      return res.status(200).json({ message: 'Pangea is connected and operational.' });
    }
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
});

const baseRoute = "/api";
app.use(baseRoute, userRoute);

const PORT = process.env.PORT || 3000;

if (vault) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
} else {
  throw new Error('Pangea is not connected or operational.');
}


