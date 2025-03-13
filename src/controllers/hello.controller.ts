import { Request, Response } from "express";

export async function sayHello(_: Request, res: Response) {
  return res.send("Hello World!");
}
