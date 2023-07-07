import { DatePicker, Form, Input, Select } from "antd";
import moment from "moment";
import { memo, useState, useEffect } from "react";
import Radios from "@/components/Radio";

const FormList = memo(({ data, type }) => {
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue(data);
  }, [data, form]);
  console.log(data);
  return (
    <Form
      form={form}
      disabled={type !== null ? type : true}
      initialValues={data}
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      style={{
        maxWidth: 600,
      }}
    >
      <Form.Item label="姓名" name="name">
        <Input />
      </Form.Item>
      <Form.Item label="性别">
        {/* /name="gender" */}
        <Radios />
      </Form.Item>
      <Form.Item label="出生年月">
        {/* //name="birthdate */}
        <DatePicker value={moment(data.birthdate, "YYYY-MM-DD")} />
      </Form.Item>
      <Form.Item label="籍贯" name="hometown">
        <Input />
      </Form.Item>
      <Form.Item label="民族" name="ethnicity">
        <Input />
      </Form.Item>
      <Form.Item label="兴趣爱好" name="hobbies">
        <Input />
      </Form.Item>
      <Form.Item label="所在部门" name="department">
        <Input />
      </Form.Item>
    </Form>
  );
});

export default FormList;
