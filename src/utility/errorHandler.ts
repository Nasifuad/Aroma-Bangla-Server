import { Request, Response, NextFunction } from "express";

interface CustomError extends Error {
  statusCode?: number;
}

export function errorHandler(
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error(err); // Log error for debugging

  const statusCode = err.statusCode || 500;
  const message =
    statusCode === 500
      ? "Internal Server Error"
      : err.message || "Something went wrong";

  res.status(statusCode).json({
    success: false,
    error: message,
  });
}
