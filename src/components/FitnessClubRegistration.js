import React, { useState } from "react";
import { Form, Input, Button, Typography, notification, Table } from "antd";
import { UserOutlined, MailOutlined, PhoneOutlined, HomeOutlined } from '@ant-design/icons';

const FitnessClubRegistration = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
    });

    const [memberList, setMemberList] = useState([]);
    const [showMemberList, setShowMemberList] = useState(false);

    const onFinish = (values) => {
        setFormData(values);
        setMemberList([...memberList, values]);
        notification.success({
            message: "User added successfully!",
            duration: 2,
        });
    };

    const columns = [{ title: "Name", dataIndex: "name", key: "name", sorter: (a, b) => a.name.length - b.name.length, }, { title: "Email", dataIndex: "email", key: "email", sorter: (a, b) => a.email.length - b.email.length, }, { title: "Phone Number", dataIndex: "phone", key: "phone", sorter: (a, b) => a.phone.length - b.phone.length, }, { title: "Address", dataIndex: "address", key: "address", sorter: (a, b) => a.address.length - b.address.length, },];

    return (
        <>
            <Typography.Title level={2} style={{ textAlign: "center" }}>
                Fitness Club Registration
            </Typography.Title>
            <Form
                name="fitness-club-registration"
                onFinish={onFinish}
                initialValues={formData}
                style={{ width: "50%", margin: "0 auto" }}
            >
                <Form.Item
                    name="name"
                    rules={[{ required: true, message: "Please input your name!", },]}
                >
                    <Input prefix={<UserOutlined />} placeholder="Name" />
                </Form.Item>
                <Form.Item
                    name="email"
                    rules={[{ type: "email", message: "The input is not a valid email address!", }, { required: true, message: "Please input your email!", },]}
                >
                    <Input prefix={<MailOutlined />} placeholder="Email" />
                </Form.Item>
                <Form.Item
                    name="phone"
                    rules={[{ required: true, message: "Please input your phone number!", },]}
                >
                    <Input prefix={<PhoneOutlined />} placeholder="Phone Number" />
                </Form.Item>
                <Form.Item
                    name="address"
                    rules={[{ required: true, message: "Please input your address!", },]}
                >
                    <Input prefix={<HomeOutlined />} placeholder="Address" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Add Member
                    </Button>
                </Form.Item>
            </Form>
            <Button onClick={() => setShowMemberList(!showMemberList)}>
                View Member List
            </Button>
            {showMemberList && (
                <Table dataSource={memberList} columns={columns} />
            )}
        </>
    );
};

export default FitnessClubRegistration;