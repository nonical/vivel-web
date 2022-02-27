import React, { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { ReactComponent as Settings } from "../../assets/settings.svg";
import { ReactComponent as XCircle } from "../../assets/x-circle.svg";
import Action from "../../components/Action";
import Container from "../../components/Container";
import DriveOverview from "../../components/DriveOverview";
import Main from "../../components/Main";
import DriveModal from "../../components/Modals/DriveModal";
import { putDrive } from "../../components/Modals/DriveModal/actions";
import FinishDonationModal from "../../components/Modals/FinishDonationModal";
import ScheduleDonationModal from "../../components/Modals/ScheduledPendingModal";
import Navbar from "../../components/Navbar";
import Table from "../../components/Table";
import Title from "../../components/Title";
import { Donation } from "../../interfaces/Donations";
import { toDateFormat, toTimeFormat } from "../../utils/date";
import { displayErrors, displaySuccess } from "../../utils/toast";
import {
  closeDrive,
  fetchDriveById,
  fetchDriveDonations,
  updateDonation,
} from "./actions";
import styles from "./DriveOverview.module.css";

export default function DontationOverview() {
  const [donation, setDonation] = useState<Donation | null>(null);

  const [showEditDriveModal, setEditDriveModal] = useState<boolean>(false);
  const [showResolveDonationModal, setResolveDonationModal] = useState(false);
  const [showScheduleDonationModal, setShowScheduleDonationModal] =
    useState(false);

  const { driveId } = useParams();
  const navigate = useNavigate();

  const { data: drive } = useQuery(["drives", driveId], () =>
    fetchDriveById(driveId!)
  );
  const { data: donations } = useQuery(["drives", "donations", driveId], () =>
    fetchDriveDonations(driveId!)
  );

  const closeDriveMutation = useMutation(closeDrive);
  const updateDonationMutation = useMutation(updateDonation);

  if (!drive || !donations) {
    return <></>;
  }

  if (closeDriveMutation.isSuccess) {
    closeDriveMutation.reset();
    displaySuccess("Drive closed!");
    navigate("/drives");
  }

  if (closeDriveMutation.isError) {
    displayErrors(closeDriveMutation.error);
    closeDriveMutation.reset();
  }

  if (updateDonationMutation.isSuccess) {
    displaySuccess("Donation updated!");
    navigate(0);
  }

  if (updateDonationMutation.isError) {
    displayErrors(updateDonationMutation.error);
  }

  return (
    <>
      <DriveModal
        title="Edit Drive"
        buttonLabel="Update"
        isOpen={showEditDriveModal}
        mutationMethod={putDrive}
        bloodAmount={drive.amount}
        bloodType={{ value: drive.bloodType, label: drive.bloodType }}
        date={drive.date}
        urgency={drive.urgency}
        onClose={() => {
          setEditDriveModal(false);
        }}
      />
      <FinishDonationModal
        title="Finish donation"
        isOpen={showResolveDonationModal}
        donationId={donation?.donationId!}
        onClose={() => {
          setResolveDonationModal(false);
        }}
      />
      <ScheduleDonationModal
        title="Schedule Donation"
        isOpen={showScheduleDonationModal}
        onClose={() => {
          setShowScheduleDonationModal(false);
        }}
        onSubmit={(scheduledDateTime) => {
          updateDonationMutation.mutate({
            ...donation!,
            status: "Scheduled",
            scheduledAt: scheduledDateTime,
          });
        }}
      />
      <Navbar hospitalName="DZ Hospital" />
      <Main>
        <Title title="Drive Overview">
          <Action
            title="Edit"
            Icon={Settings}
            iconStyles={{ stroke: "white", marginLeft: 5, marginRight: 5 }}
            onClick={() => {
              setEditDriveModal(!showEditDriveModal);
            }}
          />
          <Action
            title="Close"
            Icon={XCircle}
            iconStyles={{ stroke: "white", marginLeft: 5, marginRight: 5 }}
            onClick={async () => {
              if (
                window.confirm("Are you sure you want to close this drive?")
              ) {
                closeDriveMutation.mutate(drive);
              }
            }}
          />
        </Title>
        <Container>
          <DriveOverview
            bloodType={drive.bloodType}
            date={toDateFormat(drive.date)}
            litresToGo={parseFloat((drive.amountLeft / 1000).toFixed(2))}
            pendingCount={drive.pendingCount}
            scheduledCount={drive.scheduledCount}
          />
        </Container>
        <div className={styles.donations}>
          <div className={styles.fill}>
            <h1>Scheduled</h1>
            <Container>
              <Table>
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Date</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  {donations
                    .filter((x) => x.status === "Scheduled")
                    .map((x) => (
                      <tr
                        key={x.userId}
                        onClick={() => {
                          setDonation(x);
                          setResolveDonationModal(!showResolveDonationModal);
                        }}
                        className={styles.tr}
                      >
                        <td className={styles.td}>{x.userName}</td>
                        <td className={styles.td}>{toDateFormat(x.scheduledAt!)}</td>
                        <td className={styles.td}>{toTimeFormat(x.scheduledAt!)}</td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </Container>
          </div>
          <div className={styles.fill}>
            <h1>Pending</h1>
            <Container>
              <Table>
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Date</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  {donations
                    .filter((x) => x.status === "Pending")
                    .map((x) => (
                      <tr
                        key={x.userId}
                        className={styles.tr}
                        onClick={() => {
                          setDonation(x);
                          setShowScheduleDonationModal(true);
                        }}
                      >
                        <td className={styles.td}>{x.userName}</td>
                        <td className={styles.td}>{toDateFormat(x.createdAt)}</td>
                        <td className={styles.td}>{toTimeFormat(x.createdAt)}</td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </Container>
          </div>
        </div>
      </Main>
    </>
  );
}
