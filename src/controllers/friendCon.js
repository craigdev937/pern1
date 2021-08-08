import { pool } from "../config/database.js";

export const CreateFriend = async (req, res, next) => {
    try {
        const { firstName, lastName, age, info } = req.body;
        const createQuery = `INSERT INTO friends 
        (firstName, lastName, age, info) 
        VALUES ($1, $2, $3, $4) RETURNING *`;
        const values = [firstName, lastName, age, info];
        const newFriend = await pool.query(createQuery, values);
        res.json(newFriend.rows[0]);
    } catch (error) {
        res.status(500).json({msg: error.message});
        next(error);
    }
};

export const GetAllFriends = async (req, res, next) => {
    try {
        const getAllQuery = "SELECT * FROM friends";
        const allFriends = await pool.query(getAllQuery);
        res.json(allFriends.rows);
    } catch (error) {
        res.status(500).json({msg: error.message});
        next(error);
    }
};

export const GetOneFriend = async (req, res, next) => {
    try {
        const { id } = req.params;
        const getOneQuery = `
            SELECT * FROM friends 
            WHERE id = $1
        `;
        const values = [id];
        const friend = await pool.query(getOneQuery, values);
        res.json(friend.rows[0]);
    } catch (error) {
        res.status(500).json({msg: error.message});
        next(error);
    }
};

export const UpdateFriend = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { firstName, lastName, age, info } = req.body;
        const updateQuery = `UPDATE friends 
        SET firstName = $1, lastName = $2, age = $3, info = $4 
        WHERE id = $5 RETURNING *`;
        const values = [firstName, lastName, age, info, id];
        const updateBook = await pool.query(updateQuery, values);
        res.status(200).json(updateBook.rows[0]);
    } catch (error) {
        res.status(500).json({msg: error.message});
        next(error);
    }
};

export const DeleteFriend = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleteQuery = `
            DELETE FROM friends 
            WHERE id = $1
        `;
        const values = [id];
        const deleteFriend = await pool.query(deleteQuery, values);
        res.status(200).json("The Friend was Deleted!");
    } catch (error) {
        res.status(500).json({msg: error.message});
        next(error);
    }
};





