import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';

export class HttpException extends Error {
  public status: number;
  public message: string;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.message = message;
    Object.setPrototypeOf(this, HttpException.prototype);
  }
}

export const errorMiddleware: ErrorRequestHandler = (
  error: unknown,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const status = error instanceof HttpException ? error.status : 500;
  const message = error instanceof Error ? error.message : 'Something went wrong';
  const stack = error instanceof Error ? error.stack : undefined;

  res.status(status).json({
    status,
    message,
    ...(process.env.NODE_ENV === 'development' && { stack }),
  });
};
