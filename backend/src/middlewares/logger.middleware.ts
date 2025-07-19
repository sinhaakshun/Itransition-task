import { Request, Response, NextFunction } from 'express';
import logger from '../logger/logger';

export const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  logger.info(`Request: ${req.method} ${req.originalUrl}`);

  const originalSend = res.send;

  res.send = function (body?: any): any {
    logger.info(`Response ${res.statusCode} for ${req.method} ${req.originalUrl}`);
    logger.debug(`Response Body: ${JSON.stringify(body)}`);
    return originalSend.call(this, body);
  };

  next();
};
