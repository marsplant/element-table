import Mock from "mockjs";
import userApi from "./user";

// 模拟用户数据
Mock.mock(/\/user\/getUser/, "get", userApi.getUserList);
Mock.mock(/\/user\/del/, "get", userApi.deleteUser);
Mock.mock(/\/user\/batchremove/, "get", userApi.batchremove);
Mock.mock(/\/user\/add/, "post", userApi.createUser);
Mock.mock(/\/user\/edit/, "post", userApi.updateUser);
