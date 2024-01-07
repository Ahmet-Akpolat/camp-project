import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

export function configureAppStore() {
    return configureStore({
        reducer: rootReducer
    })
}