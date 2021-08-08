import express from "express";
import { CreateFriend, GetAllFriends, GetOneFriend, 
    UpdateFriend, DeleteFriend } from "../controllers/friendCon.js";

export const friendRt = express.Router();
    friendRt.post("/", CreateFriend);
    friendRt.get("/", GetAllFriends);
    friendRt.get("/:id", GetOneFriend);
    friendRt.put("/:id", UpdateFriend);
    friendRt.delete("/:id", DeleteFriend);



