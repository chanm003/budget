import ExpressPromiseRouter from 'express-promise-router';
import { seedDatabase } from '../data/seed';

const router = ExpressPromiseRouter();

router.route('/seed').get(async (req, res, next) => {
    const data = await seedDatabase();
    res.json({ data });
});

export default router;
