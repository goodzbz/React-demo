import React, { useState, memo, useEffect } from "react";
import { Space, Table, Button } from "antd";
import Model from "../Model";
import { columns } from "../List/configData";
import { PlusOutlined } from "@ant-design/icons";
import axios from "axios";

const { Column } = Table;
const List = memo(() => {
  const [modelOpen, setModelOpen] = useState(false); //编辑/查看开关
  const [formData, setFromData] = useState({}); //数据
  const [type, setType] = useState(true); //编辑or 查看
  const [modelOpenAdd, setModelOpenAdd] = useState(false); // 新增开关
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/users");
        console.log(response.data.users);
        setData(response.data.users);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  const handleModel = (openVale) => {
    setModelOpen(openVale);
  };
  const handleModelAdd = (openVale) => {
    setModelOpenAdd(openVale);
  };
  const handleClick = (record, type) => {
    setModelOpen(!modelOpen); //设置true  我打开的时候 要区分是编辑还是查看=> type(这个type也要传递给子组件)
    setType(type);
    setFromData(record);
  };
  const handleClickAdd = () => {
    setModelOpenAdd(!modelOpenAdd); //设置true  我打开的时候 要区分是编辑还是查看=> type(这个type也要传递给子组件)
  };
  const obj = {
    // 问题1  直接这么使用无法获取 state
    title: "Action",
    key: "action",
    render: (_, record) => {
      return (
        <Space size="middle">
          <a
            onClick={() => {
              handleClick(record, true);
            }}
          >
            查看详情
            {/* 如何区分查看详情和 需改数据打开的不同功能的model */}
          </a>
          <a
            onClick={() => {
              //  父组件中 有一个值  子组件需要使用 但是该值是一个对象 无法直接传递 所以需要一个介质（使用state）
              // 我还需要传递一个参数  是当列的数据  也就是 record
              handleClick(record, false);
            }}
          >
            修改数据
          </a>
          <a>删除</a>
        </Space>
      );
    },
  };
  const column = [...columns, obj];
  return (
    <>
      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={() => {
          handleClickAdd();
        }}
      >
        新增
      </Button>
      <Table columns={column} dataSource={data}>
        <Column
          title="Action"
          key="action"
          render={(_, record) => (
            <Space size="middle">
              <a>Invite {record.lastName}</a>
              <a>Delete</a>
            </Space>
          )}
        />
      </Table>
      <Model
        modelOpen={modelOpenAdd}
        handleModel={handleModelAdd}
        data={{}}
        type={false}
      ></Model>
      <Model
        modelOpen={modelOpen}
        handleModel={handleModel}
        data={formData}
        type={type}
      />
    </>
  );
});

export default List;
