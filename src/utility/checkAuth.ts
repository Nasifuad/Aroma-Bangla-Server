import { Request, Response, NextFunction } from "express";

export const checkAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  next();
};
