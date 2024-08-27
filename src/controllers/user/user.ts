import {Request,Response} from 'express';

export const getUser= async(req: Request, res: Response) => {
    res.status(200).send('User data');
};
