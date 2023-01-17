import { Button, Checkbox, DatePicker, Form, Input, InputNumber } from "antd";
import React from "react";

export default function ModalForm({
  onFinish,
  onFinishFailed,
  onCancel,
  item,
}) {
  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{ ...item }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Gambler`s name"
        name="gambler"
        rules={[
          {
            required: true,
            message: "Please input the gambler name",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Horse"
        name="horse"
        rules={[
          {
            required: true,
            message: "Please input the horse you are betting on!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Jockey"
        name="jockey"
        rules={[
          {
            required: true,
            message: "Please input your jockey!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Bet`s amount"
        name="bet_amount"
        rules={[
          {
            required: true,
            message: "Please input how much will you bet",
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item
        label="Race Date"
        name="race_date"
        rules={[
          {
            required: true,
            message: "Please input how much will you bet",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button type="secondary" onClick={onCancel}>
          Cancel
        </Button>
      </Form.Item>
    </Form>
  );
}
