import { Router, Request, Response } from 'express';

const router = Router();

router.route('/create')
  .get((req: Request, res: Response) => {
    res.render('tasks/create');
  })
  .post((req: Request, res: Response) => {
    console.log(req.body);
    res.send('Saved');    
  });
export default router;
