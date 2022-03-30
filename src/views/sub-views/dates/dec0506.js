import SectionHeading from "../../../components/SectionHeading.js";
import styles from "../css-modules/news.module.css";
import FadeRR from "react-reveal/Fade";

function Dec0506() {
  return (
    <FadeRR top distance="10px">
      <div className={styles.view_content_container}>
        <SectionHeading heading="December 05" />
        <p className={styles.view_para}>
          The Soviet Union vetoed today in the UN Security Council an American
          resolution calling for an immediate ceasefire in the Indian-Pakistani
          conflict and for the withdrawal of the armed forces of both the
          countries to their own side of the border.
        </p>
        <p className={styles.view_para}>
          The vote came toward the end of an eight-hour session in which the
          council heard India and Pakistan accuse each other of armed
          aggression.
        </p>
        <p className={styles.view_para}>
          The sky belonged to the Indian Air Force (IAF) today. They had
          severely damaged all the airfields and runways in East Pakistan. Pak
          forces could not get an opportunity to repair any runway as the IAF
          kept up relentless pressure.
        </p>
        <p className={styles.view_para}>
          <a
            href="https://www.thedailystar.net/news/bangladesh/news/russia-vetoes-troop-pullback-proposal-2909746"
            target="_blank"
          >
            Link on Daily Star
          </a>
        </p>
        <SectionHeading heading="December 06" />
        <p className={styles.view_para}>
          Amidst tumultuous cheers and jubilation at Lok Sabha, Indian Prime
          Minister Indira Gandhi announced today that India has recognised the
          government of Bangladesh. "I am glad to inform the House that in the
          light of the existing situation and in response to the repeated
          requests of the Government of Bangladesh, the Government of India has,
          after most careful consideration, decided to grant recognition to the
          Gana Prajatantri Bangladesh," said Indira Gandhi.
        </p>
        <p className={styles.view_para}>
          <a
            href="https://www.thedailystar.net/news/bangladesh/news/india-recognises-bangladesh-2910421"
            target="_blank"
          >
            Link on Daily Star
          </a>
        </p>
      </div>
    </FadeRR>
  );
}

export default Dec0506;
