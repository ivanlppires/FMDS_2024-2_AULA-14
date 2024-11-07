import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API com Autenticação Firebase',
      version: '1.0.0',
      description: 'API documentada com Swagger e protegida por Firebase Authentication',
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT', // Especifica que o token é JWT
        },
      },
    },
    security: [
      {
        bearerAuth: [], // Define que o esquema de segurança é obrigatório por padrão
      },
    ],
  },
  apis: ['./routes/*.js'],
};

const specs = swaggerJsdoc(options);

export default (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};
