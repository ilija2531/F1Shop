import {express} from 'express';
const router = express.Router();
const{
    createOrder,
    getMyOrders,
    getAllOrders,
    updateOrderStatus
} = require('../controllers/OrderController.js');

router.post('/', createOrder);
router.get('/myorders/:userId', getMyOrders);
router.get('/', getAllOrders);
router.put('/:id/status', updateOrderStatus);

export default router;