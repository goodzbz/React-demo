import request from "axios";

export const getDataList = () => {
  request.get("/users").then((res) => {
    console.log(res.data);
  });
};
export const deleteDataList = (option) => {
  //删除
  request.delete("/users/id").then((res) => {
    console.log(res.data);
  });
};
export const putDataList = (option) => {
  // 改
  console.log(option.id, 11111111111111111111);
  return request.put(`/users/${option.id}`, { option }).then((res) => {
    console.log(res.data);
  });
};

export const addDataList = (option) => {
  //增加
  request.post("/users").then((res) => {
    console.log(res.data);
  });
};
