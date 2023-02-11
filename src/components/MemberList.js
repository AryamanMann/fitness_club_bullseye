import React from "react";
import { Table, Typography } from "antd";

const MemberList = ({ memberList, columns }) => (
    <>
        <Typography.Title level={2} style={{ textAlign: "center" }}>
            Member List
        </Typography.Title>
        <Table dataSource={memberList} columns={columns} style={{ margin: "0 auto", width: "80%" }} />
    </>
);

export default MemberList;