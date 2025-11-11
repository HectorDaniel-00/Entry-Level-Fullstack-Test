import express from "express";
import * as usersService from "../services/users.service";
import { Request, Response } from "express";

export const search = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const controller = await usersService.search(email);
    res.status(200).json(controller);
  } catch (error) {
    console.error("Error", error);
    res.status(500).json({
      message: "error al buscar usuario",
      error: error,
    });
  }
};
