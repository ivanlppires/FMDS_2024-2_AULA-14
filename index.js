import express from 'express';
import clientRoutes from './routes/ClientRoutes.js';
import cors from 'cors';
import admin from 'firebase-admin';
import serviceAccount from './middlewares/fmds-auth01-firebase-adminsdk-zcdb6-32a5593ed2.json' assert { type: 'json' }; // Ajuste o caminho para o seu arquivo JSON
import checkFirebaseToken from './middlewares/checkFirebaseToken.js';
import swaggerSetup from './swagger.js';

const app = express();

// Swagger
swaggerSetup(app);

// Inicialize o Firebase Admin SDK
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

// usar cors
app.use(cors());

// Middleware para autenticar o token do firebase
app.use(checkFirebaseToken);

// Usar json no corpo da requisição
app.use(express.json());

app.use('/client', clientRoutes);

app.listen(5000, () => { console.log('Servidor express rodando') }); ''