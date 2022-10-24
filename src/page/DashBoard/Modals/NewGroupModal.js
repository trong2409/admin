import { Modal, Button, Form, Input, Select, Typography } from "antd";
import { useState } from "react";
import { UsergroupAddOutlined } from "@ant-design/icons";

function NewGroupModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button
        type="primary"
        onClick={showModal}
        icon={<UsergroupAddOutlined />}
      >
        New Group
      </Button>
      <Modal
        title={<Typography.Text>NEW GROUP</Typography.Text>}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form layout="vertical">
          <Form.Item label="Enter name" name="name">
            <Input />
          </Form.Item>
          <Form.Item label="Choose folder access" name="access">
            <Select mode="multiple" allowClear>
              <Select.Option key="A">Folder A</Select.Option>
              <Select.Option key="B">Folder B</Select.Option>
              <Select.Option key="C">Folder C</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Enter description" name="description">
            <Input.TextArea />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default NewGroupModal;
