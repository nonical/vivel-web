import React from "react";

import Navbar from "../../components/Navbar";
import Container from "../../components/Container";
import Table from "../../components/Table";
import Switch from "../../components/Switch";
import Action from "../../components/Action";
import Title from "../../components/Title";
import Main from "../../components/Main";
import { ReactComponent as PlusCircle } from "../../assets/plus-circle.svg";

export default function Drive() {
  return (
    <>
      <Navbar />
      <Main>
        <Title title={"Drives"}>
          <Switch initChecked={false} onToggle={() => {}} />
          <span
            style={{
              marginLeft: 10,
              marginRight: 25,
            }}
          >
            Show inactive
          </span>
          <Action
            title="New Drive"
            Icon={PlusCircle}
            iconStyles={{ stroke: "white", marginRight: 5 }}
          />
        </Title>
        <Container>
          <div style={{ minHeight: 600 }}>
            <Table>
              <thead>
                <th>Date</th>
                <th>Blood Amount</th>
                <th>Blood Type</th>
                <th>Urgent</th>
                <th>Status</th>
              </thead>
              <tr>
                <td>2020-10-05</td>
                <td>3,5L</td>
                <td>AB+</td>
                <td>No</td>
                <td>Active</td>
              </tr>
              <tr>
                <td>2020-10-05</td>
                <td>2,5L</td>
                <td>O+</td>
                <td>Yes</td>
                <td>Active</td>
              </tr>
            </Table>
          </div>
        </Container>
      </Main>
    </>
  );
}
