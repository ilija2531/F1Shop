const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'F1 Shop API',
      version: '1.0.0',
      description: 'API docs for F1 Shop',
    },
    servers: [
      {
        url: 'http://localhost:5000',
      },
    ],
    components: {
      schemas: {
        Order: {
          type: 'object',
          properties: {
            _id: { type: 'string' },
            user: { type: 'string' },
            orderItems: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  product: { type: 'string' },
                  name: { type: 'string' },
                  qty: { type: 'number' },
                  price: { type: 'number' }
                }
              }
            },
            shippingAddress: {
              type: 'object',
              properties: {
                address: { type: 'string' },
                city: { type: 'string' },
                postalCode: { type: 'string' },
                country: { type: 'string' }
              }
            },
            paymentMethod: { type: 'string' },
            isPaid: { type: 'boolean' },
            paidAt: { type: 'string', format: 'date-time' },
            isDelivered: { type: 'boolean' },
            deliveredAt: { type: 'string', format: 'date-time' },
            createdAt: { type: 'string', format: 'date-time' },
            updatedAt: { type: 'string', format: 'date-time' }
          }
        },
        Product: {
          type: 'object',
          properties: {
            _id: { type: 'string' },
            name: { type: 'string' },
            brand: { type: 'string' },
            category: { type: 'string' },
            description: { type: 'string' },
            price: { type: 'number' },
            countInStock: { type: 'number' },
            image: { type: 'string' },
            createdAt: { type: 'string', format: 'date-time' },
            updatedAt: { type: 'string', format: 'date-time' }
          }
        },
        User: {
          type: 'object',
          properties: {
            _id: { type: 'string' },
            name: { type: 'string' },
            email: { type: 'string', format: 'email' },
            password: { type: 'string' },
            isAdmin: { type: 'boolean' },
            createdAt: { type: 'string', format: 'date-time' },
            updatedAt: { type: 'string', format: 'date-time' }
          }
        }
      }
    }
  },
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJsDoc(options);

const setupSwagger = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = setupSwagger;
