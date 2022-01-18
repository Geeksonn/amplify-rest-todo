import { API } from "aws-amplify";
import { v4 as uuidv4 } from "uuid";

const API_NAME = "todoApi";
const API_PATH = "/todos";

const createTodo = (username, item) => {
    const todoItem = {
        id: uuidv4(),
        item: item,
        done: false,
        user: username,
        created: new Date(),
    };

    return API.post(API_NAME, API_PATH, { body: todoItem });
};

const getTodo = () => {
    return API.get(API_NAME, API_PATH, {});
};

export { createTodo, getTodo };
