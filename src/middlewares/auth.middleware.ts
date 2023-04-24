import { Injectable, NestMiddleware } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from "express";

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const authHeader = req.headers['authorization'] as string;
        if (!authHeader) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        try {
            const token = authHeader.split(' ')[1];
            const decoded = jwt.verify(token,'secret');
            console.log(decoded);
            req['userId'] = decoded['sub'];
            next();
        } catch (e) {
            return res.status(401).json({ message: "Unauthorized" });
        }
    }
}
