const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUsers
} = require('../controllers/UserController');

const { protect, admin } = require('../middleware/authMiddleware');

/**
 * @swagger
 * /api/users/register:
 *   post:
 *     summary: User registration
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Successfully registered user
 *       400:
 *         description: User already exists or validation error
 */



router.post('/register', registerUser);

/**
 * @swagger
 * /api/users/login:
 *   post:
 *     summary: User login
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Successfully logged in user
 *       400:
 *         description: Invalid email or password
 */
router.post('/login', loginUser);
router.get('/',protect, admin, getUsers); 

module.exports = router;
