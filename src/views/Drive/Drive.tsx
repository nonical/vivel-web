import React, { useState } from "react";
import { useQuery } from "react-query";

import Navbar from "../../components/Navbar";
import Container from "../../components/Container";
import Table from "../../components/Table";
import Switch from "../../components/Switch";
import Action from "../../components/Action";
import Title from "../../components/Title";
import Main from "../../components/Main";
import DriveModal from "../../components/Modals/DriveModal";
import styles from "../DonationOverview/DriveOverview.module.css";

import { ReactComponent as PlusCircle } from "../../assets/plus-circle.svg";

import { Drive as DriveModel } from "./actions";
import { fetchDrives } from "./actions";
import { postDrive } from "../../components/Modals/DriveModal/actions";
import { toDateFormat } from "../../utils/date";
import { useNavigate } from "react-router-dom";

export default function Drive() {
  const [drives, setDrives] = useState<DriveModel[]>();
  const [modal, setModal] = useState<boolean>(false);
  const navigate = useNavigate();

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
      <DriveModal
        title="New Drive"
        buttonLabel="Create"
        isOpen={modal}
        mutationMethod={postDrive}
        onClose={() => {
          setModal(false);
        }}
      />
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
                {drives?.map((drive) => {
                  return (
                    <tr
                      key={drive.driveId}
                      onClick={() => {
                        navigate(`/drives/${drive.driveId}`);
                      }}
                      className={styles.tr}
                    >
                      <td className={styles.td}>{toDateFormat(drive.date)}</td>
                      <td className={styles.td}>{drive.amount}L</td>
                      <td className={styles.td}>{drive.bloodType}</td>
                      <td className={styles.td}>{drive.urgency}</td>
                      <td className={styles.td}>{drive.status}</td>
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
