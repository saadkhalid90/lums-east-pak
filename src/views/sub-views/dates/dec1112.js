import SectionHeading from "../../../components/SectionHeading.js";
import styles from "../css-modules/news.module.css";
import FadeRR from "react-reveal/Fade";

function Dec1112() {
  return (
    <FadeRR top distance="10px">
      <div className={styles.view_content_container}>
        <SectionHeading heading="December 11" />
        <p className={styles.view_para}>
          Pakistan said today that India had landed a brigade of paratroops
          north of Dhaka. A Pakistani military spokesman described the situation
          in East Pakistan as "grim". It was, however, asserted that major East
          Pakistani towns, including Jessore and Comilla, were still in
          Pakistani hands but that landing of Indian troops by helicopter and
          parachute deep within East Pakistan had bypassed main points of
          Pakistani resistance.
        </p>
        <p className={styles.view_para}>
          The Pakistan army in the eastern section was cut off from resupply
          from the West and for the last four days had been without the
          protection of an air force. Dhaka was under continuous air attack by
          Mitro Bahini.
        </p>
        <p className={styles.view_para}>
          <a
            className={styles.clickLink}
            href="https://www.thedailystar.net/news/bangladesh/news/pakistan-general-sends-sos-un-2914571"
            target="_blank"
          >
            Link on Daily Star
          </a>
        </p>
        <SectionHeading heading="December 12" />
        <p className={styles.view_para}>
          Mitro Bahini were advancing on Dhaka from three directions. "The war
          has at last come to Dhaka," a Voice of America correspondent reported
          from the encircled Dhaka as advancing columns of Mitro Bahini came as
          close as 18km from their main destination.
        </p>
        <p className={styles.view_para}>
          Senior Pakistani officers predicted Indian troops would reach Dhaka
          within 48 hours, reported The New York Times. "Word of the imminence
          of an Indian attack came from nervous and dispirited officials at
          Government House. One general spoke melodramatically of throwing
          himself under a tank, but it is likely that no tanks would be
          available. Other senior Pakistanis, were expecting to be taken
          prisoner by the Indians but were fearful that the Bangalee guerrillas
          would reach them first," added the newspaper.
        </p>
        <p className={styles.view_para}>
          <a
            className={styles.clickLink}
            href="https://www.thedailystar.net/news/bangladesh/news/india-russia-discuss-bangladesh-war-2915166"
            target="_blank"
          >
            Link on Daily Star
          </a>
        </p>
      </div>
    </FadeRR>
  );
}

export default Dec1112;
