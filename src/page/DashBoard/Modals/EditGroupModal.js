import { Modal, Form, Input, Select, Typography } from "antd";

function EditGroupModal({ isOpen, setIsOpen, group }) {
  const handleOk = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };
  return (
    <>
      <Modal
        title={<Typography.Text>{group}</Typography.Text>}
        open={isOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form layout="vertical">
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

export default EditGroupModal;
