import { createStore } from "redux"
import rootReducer from "../features/testarea/reducers/rootReducer";



export const configureStore = () => {
    const store = createStore(rootReducer);

    return store;
}