import React from "react";
import "./App.css";
import { Friends } from "../containers/Friends";
import { Provider } from "react-redux";
import { RootReducer } from "../global/RootReducer";

export const App = (): JSX.Element => {
    return (
        <Provider store={RootReducer}>
            <React.Fragment>
                <Friends />
            </React.Fragment>
        </Provider>
    );
};





