import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

async function authTokenHeaderMiddleware(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;
  
    if (!authHeader) {
      return res.status(401).json({ message: 'Token not provided' });
    }

    
}    




// import jwt from 'jsonwebtoken';
// import { User } from '../entities';

// interface TokenPayload {
//   id: number;
//   admin: boolean;
// }

// async function authMiddleware(req: Request, res: Response, next: NextFunction) {
//   const authHeader = req.headers.authorization;

//   if (!authHeader) {
//     return res.status(401).json({ message: 'Token not provided' });
//   }

//   const [, token] = authHeader.split(' ');

//   try {
//     const data = jwt.verify(token, process.env.JWT_SECRET) as TokenPayload;

//     const { id, admin } = data;

//     const user = await User.findOne(id);

//     if (!user) {
//       return res.status(401).json({ message: 'User not found' });
//     }

//     if (!admin) {
//       return res.status(401).json({ message: 'Unauthorized' });
//     }

//     req.userId = id;

//     return next();
//   } catch {
//     return res.status(401).json({ message: 'Invalid token' });
//   }
// }

// export default authMiddleware;
