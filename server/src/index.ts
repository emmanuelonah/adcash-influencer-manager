import 'colors';
import 'reflect-metadata';

import http from 'http';

import app from './app';

import { connectDb } from './db/index.db';
import { envVars } from './utils';

async function startServer() {
    await connectDb(() => {
        const httpServer = http.createServer(app);

        httpServer.listen(envVars.serverPort, () => {
            console.log(`${envVars.appName} SERVER STARTED`.blue.bold);
            console.log(
                `
      //\\
      |🤖|
    //____\\
      | A |
      | D |
      | C |
      | A |
      | S |
      | H |
      |   |
      | I |
      | N |
      | F |
      | L |
      | U |
      | E |
      | N |
      | C |
      | E |
      | R |
      | S |
      |   |
      | S |
      | E |
      | R |
      | V |
    //| E |\\
   // | R | \\
  //__|___|__\\
     //_\\/_\\
 `.green
            );
            console.log(`${envVars.serverUrl}`.white.underline);
        });
    });
}

startServer();
