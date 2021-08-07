import express from "express";
import { indexHome } from "../controllers/friendCon.js";

export const friendRt = express.Router();
    friendRt.get("/", indexHome);



