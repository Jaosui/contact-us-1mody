import React from "react";
import { Table, Button, Space, Popconfirm, message  } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined  
} from '@ant-design/icons';

export default function UsersDetails() {
  const [dataArray, setDataArray] = React.useState(null);

  React.useEffect(() => {
    const detail = JSON.parse(localStorage.getItem("user"));
    console.log(detail)
    setDataArray(detail);
  }, []);


  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email"
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age"
    },
    {
      title: "Website",
      dataIndex: "website",
      key: "website"
    },
    {
      title: "Introduction",
      dataIndex: "introduction",
      key: "introduction"
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: (test1, test2, index) => {
        // console.log(test1)
        // console.log(test2)
        console.log(index)
        function confirm(e) {
          console.log(e);
          message.success('Click on Yes');
          console.log("------------")
          console.log(index)
          deleteUser(index)
        }
        
        function cancel(e) {
          console.log(e);
          message.error('Click on No');
        }
        return (
          <Popconfirm
            title="Are you sure to delete this task?"
            onConfirm={confirm}
            onCancel={cancel}
        >
          <a>Delete</a>
        </Popconfirm>
        )
      }
          // <>
          //   <Space size='middle'>
          //     <Button onClick={editBtn} danger><EditOutlined />EDIT</Button>
          //     <Button onClick={deleteBtn} type="primary" danger><DeleteOutlined />DELETE</Button>
          //   </Space>
          // </>
    }
  ]

const deleteBtn = () => {
  console.log('delete') 
}
const editBtn = () => {
  console.log('edit') 
}

function deleteUser (index) {
  for (let i=0; i<dataArray.length; i++) {
    if (index == i){
      const newData = dataArray.slice(0, i).concat(dataArray.slice(index + 1))
      console.log(newData)
      setDataArray(newData)
      localStorage.setItem('user', JSON.stringify(newData));
    }
  }
}
  

  return (
    <div>
      <h1>UsersDetails</h1>
      <Table
        dataSource={dataArray}
        columns = {columns}
        rowKey={dataArray => dataArray.id}/>
    </div>
  );
}
