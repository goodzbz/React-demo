import { Button, Modal } from "antd";
import { useState, memo } from "react";
import FormList from "../Form";
// import { putDataList } from "../../api";
import axios from "axios";

const Model = memo(({ modelOpen, handleModel, data, type }) => {
  const [loading, setLoading] = useState(false);

  const handleOk = () => {
    setLoading(true);
    // 调用接口 修改数据
    setTimeout(() => {
      setLoading(false);
      handleModel(false);
    }, 3000);

    // console.log(putDataList(data));
    // axios.post(`/api/users`, { data }).then((res) => {
    //   console.log(res.data, 22222222222);
    // });
    // axios                                       x
    //   .put(`/api/users/${data.id}`, { data })
    //   .then((res) => {
    //     console.log(res.data, 22222222222);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    axios
      .delete(`/api/users/${data.id}`)
      .then((res) => {
        console.log(res.data, 22222222222);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Modal
        open={modelOpen}
        title="Title"
        onOk={handleOk}
        onCancel={() => {
          handleModel(false);
        }}
        footer={[
          <Button
            key="back"
            onClick={() => {
              handleModel(false);
            }}
          >
            Return
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleOk} //提交数据  对应的是修改的接口
          >
            Submit
          </Button>,
        ]}
      >
        <FormList data={data} type={type} />
      </Modal>
    </>
  );
});
export default Model;
