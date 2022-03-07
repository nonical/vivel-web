import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Container from "../../components/Container";
import Table from "../../components/Table";
import Action from "../../components/Action";
import Title from "../../components/Title";
import Main from "../../components/Main";
import styles from "../DriveOverview/DriveOverview.module.css";
import { ReactComponent as Printer } from "../../assets/printer.svg";
import DriveReportModal from "../../components/Modals/DriveReportModal";
import { fetchDriveReport } from "../../components/Modals/DriveReportModal/actions";
import BloodTypeLitresReportModal from "../../components/Modals/BloodTypeLitresReportModal";
import { fetchBloodTypeLitresReport } from "../../components/Modals/BloodTypeLitresReportModal/actions";

export default function Report() {
  const [driveModal, setDriveModal] = useState<boolean>(false);
  const [bloodTypeModal, setBloodTypeModal] = useState<boolean>(false);

  return (
    <div>
      <DriveReportModal
        title="Get drive reports"
        buttonLabel="Print"
        isOpen={driveModal}
        mutationMethod={fetchDriveReport}
        onClose={() => {
          setDriveModal(false);
        }}
      />
      <BloodTypeLitresReportModal
        title="Get blood type litres reports"
        buttonLabel="Print"
        isOpen={bloodTypeModal}
        mutationMethod={fetchBloodTypeLitresReport}
        onClose={() => {
          setBloodTypeModal(false);
        }}
      />
      <Navbar />
      <Main>
        <Title title={"Reports"} />
        <Container>
          <div style={{ minHeight: 600 }}>
            <Table>
              <thead>
                <tr>
                  <th style={{ textAlign: "left", paddingLeft: 30 }}>Name</th>
                  <th style={{ textAlign: "right", paddingRight: 30 }}>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className={styles.tr} onClick={() => setDriveModal(true)}>
                  <td
                    style={{ textAlign: "left", paddingLeft: 30 }}
                    className={styles.td}
                  >
                    Drive reports
                  </td>
                  <td className={styles.td}>
                    <Action
                      Icon={Printer}
                      iconStyles={{
                        marginRight: 5,
                      }}
                      title={"Print"}
                    />
                  </td>
                </tr>
                <tr
                  className={styles.tr}
                  onClick={() => setBloodTypeModal(true)}
                >
                  <td
                    style={{ textAlign: "left", paddingLeft: 30 }}
                    className={styles.td}
                  >
                    Litres donated by blood type
                  </td>
                  <td className={styles.td}>
                    <Action
                      Icon={Printer}
                      iconStyles={{
                        marginRight: 5,
                      }}
                      title={"Print"}
                    />
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Container>
      </Main>
    </div>
  );
}
