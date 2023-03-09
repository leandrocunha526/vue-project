import { createStore } from "vuex";
import user_module from "../store/user_module";

export default createStore({
    modules: {
        user: user_module,
    }
});
