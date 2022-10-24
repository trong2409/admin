import { Modal, Typography } from "antd";

function DeleteGroupModal({ isOpen, setIsOpen, group }) {
  const handleOk = () => {
    setIsOpen(false);
  };
  const handleCancel = () => {
    setIsOpen(false);
  };
  return (
    <>
      <Modal
        title={<Typography.Text>DELETE</Typography.Text>}
        open={isOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{ type: "danger" }}
      >
        <Typography.Text>Delete {group} ?</Typography.Text>
      </Modal>
    </>
  );
}

export default DeleteGroupModal;
