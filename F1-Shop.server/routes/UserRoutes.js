import {express} from 'express';
const router = express.Router();
const{
    registerUser,
    loginUser,
    getUsers
 } = require('../controllers/UserController.js');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/', getUsers);

export default router;