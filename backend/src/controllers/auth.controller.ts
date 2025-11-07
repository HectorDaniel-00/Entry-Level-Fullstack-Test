import express from "express";
import * as authService from "../services/auth.service.js";
import { Request, Response } from "express";
import { CreateUserDto } from "../dto/index.js";

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const controller = await authService.login(email, password);
    res.status(200).json(controller);
  } catch (error) {
    console.error("error", error);
    res.status(500).json({
      message: "Error al crear usuario",
      error: error,
    });
  }
};

export const register = async (req: Request, res: Response) => {
  try {
    const data: CreateUserDto = req.body;
    const controller = await authService.register(data);
    res.status(201).json(controller);
  } catch (error) {
    console.error("Error", error);
    res.status(500).json({
      message: "Error al crear un usuario nuevo",
      error: error,
    });
  }
};
