import { configureStore } from "@reduxjs/toolkit";
import { FriendReducer } from "./FriendSlice";

export const RootReducer = configureStore({
    reducer: {
        friends: FriendReducer,
    }
});

export type RootState = ReturnType<typeof RootReducer.getState>;
export type AppDispatch = typeof RootReducer.dispatch;



