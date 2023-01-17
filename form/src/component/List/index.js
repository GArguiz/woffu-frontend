import React, { useState } from "react";
import { List, Modal, Tooltip } from "antd";
import "./styles.css";
import ListItem from "../ListItem";
import ListHeader from "../ListHeader";
import ModalForm from "../ModalForm";
export default function ListComponent({
  dataSource,
  loading,
  onEditData,
  onDeleteData,
  onAddData,
}) {
  const [id, setId] = useState(-1);
  const [item, setItem] = useState({});
  const [isAddBetOpen, setIsAddBetOpen] = useState(false);
  const [isDeleteBetOpen, setIsDeleteBetOpen] = useState(false);
  const [isEditBetOpen, setIsEditBetOpen] = useState(false);

  const handleCancel = (setBetOpen) => {
    setBetOpen(false);
  };

  const onAdd = () => {
    setIsAddBetOpen(true);
  };

  const onEdit = (item) => {
    setItem(item);
    setIsEditBetOpen(true);
  };

  const onDelete = (id) => {
    setId(id);
    setIsDeleteBetOpen(true);
  };

  const handleOkDelete = () => {
    onDeleteData(id);
    setIsDeleteBetOpen(false);
    setId(-1);
  };

  const handleOkEdit = (newItem) => {
    onEditData({ item: newItem, id: item.id });
    setIsEditBetOpen(false);
  };

  const handleOkAdd = (newItem) => {
    onAddData(newItem);
    setIsAddBetOpen(false);
  };

  return (
    <React.Fragment>
      <ListHeader onPlusClick={onAdd} />
      <List
        className="widget-list"
        loading={loading}
        itemLayout="horizontal"
        size="small"
        dataSource={dataSource}
        renderItem={(item) => (
          <ListItem
            item={item}
            onEdit={onEdit}
            onCancel={() => handleCancel(setIsDeleteBetOpen)}
            onDelete={onDelete}
          />
        )}
      />
      <Modal
        title="Delete Bet"
        open={isDeleteBetOpen}
        onOk={handleOkDelete}
        onCancel={() => handleCancel(setIsDeleteBetOpen)}
      >
        <p>Are you sure to delete this bet? This action is irreversible</p>
      </Modal>
      <Modal
        title="Edit Bet"
        open={isEditBetOpen}
        onCancel={() => handleCancel(setIsEditBetOpen)}
        footer={null}
      >
        <ModalForm
          onFinish={handleOkEdit}
          onCancel={() => handleCancel(setIsEditBetOpen)}
          item={item}
        ></ModalForm>
      </Modal>
      <Modal
        title="Create Bet"
        open={isAddBetOpen}
        onCancel={() => handleCancel(setIsAddBetOpen)}
        footer={null}
      >
        <ModalForm
          onFinish={handleOkAdd}
          onCancel={() => handleCancel(setIsAddBetOpen)}
          item={item}
        ></ModalForm>
      </Modal>
    </React.Fragment>
  );
}
