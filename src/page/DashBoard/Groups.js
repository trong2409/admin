import { Typography, Space, Table, Button } from "antd";
import { useState } from "react";

import classes from "./Groups.module.scss";
import NewGroupModal from "./Modals/NewGroupModal";
import EditGroupModal from "./Modals/EditGroupModal";
import DeleteGroupModal from "./Modals/DeleteGroupModal";

function Groups() {
  const [isDeleteGroupModalOpen, setIsDeleteGroupModalOpen] = useState(false);
  const [isEditGroupModalOpen, setIsEditGroupModalOpen] = useState(false);

  const columns = [
    {
      title: "NO",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "GroupName",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Access",
      dataIndex: "access",
      key: "access",
      render: (arr) => {
        return arr.join(", ");
      },
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => setIsEditGroupModalOpen(true)}>
            Edit
          </Button>
          <Button type="danger" onClick={() => setIsDeleteGroupModalOpen(true)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];
  let data = [
    {
      key: "1",
      name: "Group1",
      access: ["Folder A"],
      description: "Phòng tài chính",
    },
    {
      key: "2",
      name: "Group2",
      access: ["Folder B"],
      description: "Phòng kinh doanh",
    },
    {
      key: "3",
      name: "Group3",
      access: ["Folder A", "Folder B"],
      description: "Phòng giám đốc",
    },
  ];
  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <Typography.Text>Groups setting</Typography.Text>
        <div className={classes.option}>
          <NewGroupModal />
        </div>
      </div>
      <Table scroll={{ y: 500, x: 0 }} columns={columns} dataSource={data} />
      <DeleteGroupModal
        isOpen={isDeleteGroupModalOpen}
        setIsOpen={setIsDeleteGroupModalOpen}
        group="Group1"
      />
      <EditGroupModal
        isOpen={isEditGroupModalOpen}
        setIsOpen={setIsEditGroupModalOpen}
        group="Group1"
      />
    </div>
  );
}

export default Groups;
