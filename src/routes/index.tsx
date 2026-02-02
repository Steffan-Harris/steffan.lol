import { createFileRoute } from "@tanstack/react-router";
import styles from "./index.module.css";
import Heading from "../components/Heading";
import Summary from "../components/Summary";
import Logo from "../components/Logo";
import SummaryItem from "../components/SummaryItem";
import Avatar from "../components/Avatar";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className={styles.homepage}>
      <Logo className={styles.logo} />
      <Heading className={styles.heading}>
        Software engineer committed to enhancing user experiences
      </Heading>
      <Avatar className={styles.avatar} />
      <Summary heading="Technical Skills">
        <SummaryItem>ReactJS</SummaryItem>
        <SummaryItem>TypeScript</SummaryItem>
        <SummaryItem>UI Design</SummaryItem>
      </Summary>
      <Summary heading="Experience">
        <SummaryItem>Sainsbury's</SummaryItem>
        <SummaryItem>Vodafone</SummaryItem>
        <SummaryItem>Red Technology</SummaryItem>
        <SummaryItem>Bee Design Ltd</SummaryItem>
      </Summary>
    </div>
  );
}
