import { NextFunction, Request, Response } from "express";

export async function middleware(req: Request, res: Response, next: NextFunction) {
  console.log(`Hey it's middleware!`);
  next();
}
