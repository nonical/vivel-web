import React, { useState } from "react";
import { useQuery } from "react-query";

import Navbar from "../../components/Navbar";
import Container from "../../components/Container";
import Table from "../../components/Table";
import Switch from "../../components/Switch";
import Action from "../../components/Action";
import Title from "../../components/Title";
import Main from "../../components/Main";
import { default as DriveModal } from "../../components/Modals/Drive";

import { ReactComponent as PlusCircle } from "../../assets/plus-circle.svg";
import { fetchDrives } from "./actions";
import { Drive as DriveModel } from "./actions";

export default function Drive() {
  const [drives, setDrives] = useState<DriveModel[]>();
  const [modal, setModal] = useState<boolean>(false);

  const { data: openDrives } = useQuery(
    ["openDrives"],
    async () => {
      return fetchDrives("Open");
    },
    {
      onSuccess: (data) => {
        if (!drives) setDrives(data);
      },
    }
  );

  const { data: closedDrives } = useQuery(["closedDrives"], () => {
    return fetchDrives("Closed");
  });

  return (
    <div>
      <DriveModal isOpen={modal} />
      <Navbar />
      <Main>
        <Title title={"Drives"}>
          <Switch
            initChecked={false}
            onToggle={(checked) => {
              checked ? setDrives(closedDrives) : setDrives(openDrives);
            }}
            title={"Show closed"}
          />
          <Action
            title="New Drive"
            Icon={PlusCircle}
            iconStyles={{ stroke: "white", marginRight: 5 }}
            onClick={() => {
              setModal(!modal);
            }}
          />
        </Title>
        <Container>
          <div style={{ minHeight: 600 }}>
            <Table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Blood Amount</th>
                  <th>Blood Type</th>
                  <th>Urgent</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {drives?.map((drive: DriveModel) => {
                  return (
                    <tr key={drive.driveId}>
                      <td>{drive.date}</td>
                      <td>{drive.amount}L</td>
                      <td>{drive.bloodType}</td>
                      <td>{drive.urgency}</td>
                      <td>{drive.status}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </Container>
      </Main>
    </div>
  );
}
