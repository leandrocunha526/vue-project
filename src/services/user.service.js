import api from "./api"

const register = async function(user){
    return await api.post("/user/register", JSON.stringify(user), {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((res) => {
        return res.data;
    }).catch((error) => {
        return error.response.data;
    });
}

const login = async function(user) {
    return await api.post("/user/login", JSON.stringify(user), {
        headers: {
            'Content-Type': 'application/json',
        },
        withCredentials: true
    }).then((res) => {
        return res.data;
    }).catch((error) => {
        return error.response.data
    })
}

const getUserProfile = async function(){
    return await api.get("/user/profile", {
        withCredentials: true
    }).then((res) => {
        return res.data;
    }).catch((error) => {
        return error.response.data;
    });
}

const getTasks = async function(){
    return await api.get("/task/list", {
        withCredentials: true
    }).then((res) => {
        return res.data;
    }).catch((error) => {
        return error.response.data;
    });
}

const createTask = async function(task) {
    return await api.post("/task/register", JSON.stringify(task), {
        headers:{
            'Content-Type': 'application/json'
        },
        withCredentials: true
    }).then((res) => {
        return res.data;
    }).catch((error) => {
        return error.response.data;
    });
}

const updateTask = async function(id, task) {
    return await api.put("/task/update" + id, JSON.stringify(task), {
        headers:{
            'Content-Type': 'application/json'
        },
        withCredentials: true
    }).then((res) => {
        return res.data;
    }).catch((error) => {
        return error.response.data;
    });
}

const deleteTask = async function(id) {
    return await api.delete("/task/delete" + id, {
        headers:{
            'Content-Type': 'application/json'
        },
        withCredentials: true
    }).then((res) => {
        return res.data;
    }).catch((error) => {
        return error.response.data;
    });
}

const listTaskById = async function(id, task) {
    return await api.post("/task/list" + id, JSON.stringify(task), {
        headers:{
            'Content-Type': 'application/json'
        },
        withCredentials: true
    }).then((res) => {
        return res.data;
    }).catch((error) => {
        return error.response.data;
    });
}

export const userService = {
    register,
    login,
    getUserProfile,
    getTasks,
    createTask,
    updateTask,
    deleteTask,
    listTaskById
}
