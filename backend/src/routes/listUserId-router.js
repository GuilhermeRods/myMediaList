import Router from 'koa-router';
import listUserIdController from '../controllers/listUserIdController'

const router = new Router();

router.get('/userId/:id', listUserIdController.listUser);
export default router.routes();
