import { combineReducers, createStore } from "redux";
import authReduser from "./auth-reduser";
import dialogsReduser from "./dialogsReduser";
import profileReduser from "./profileReduser";
import sidebarReduser from "./sidebarReduser";
import usersReduser from "./usersReduser";

let redusers = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
    usersPage: usersReduser,
    sidebar: sidebarReduser,
    auth: authReduser,
})

let store = createStore(redusers);
// window.store = store;
export default store;