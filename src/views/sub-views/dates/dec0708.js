import SectionHeading from "../../../components/SectionHeading.js";
import styles from "../css-modules/news.module.css";
import FadeRR from "react-reveal/Fade";

function Dec0708() {
  return (
    <FadeRR top distance="10px">
      <div className={styles.view_content_container}>
        <SectionHeading heading="December 07" />
        <p className={styles.view_para}>
          With the war between Pakistan and India reaching a critical phase, Pak
          president Yahya Khan tonight appointed a civilian prime minister and
          deputy prime minister whose immediate task was to plead Pakistan's
          case before the United Nations. The real power would be retained by
          Yahya.
        </p>
        <p className={styles.view_para}>
          The Pak president named Nurul Amin, a Bangalee lawyer and the
          president of Pakistan Democratic Party (PDP), as prime minister.
          Zulfikar Ali Bhutto, a former foreign minister, who was the leader
          Pakistan Peoples Party, was named deputy prime minister.
        </p>
        <p className={styles.view_para}>
          <a
            className={styles.clickLink}
            href="https://www.thedailystar.net/news/bangladesh/news/general-assembly-holds-emergency-debate-2911241"
            target="_blank"
          >
            Link on Daily Star
          </a>
        </p>
        <SectionHeading heading="December 08" />
        <p className={styles.view_para}>
          Comilla and Brahmanbaria was captured by Mitro Bahini today. A number
          of other places—including Magura, Elliotganj, Natundaha, Dangapra—had
          also fallen in other parts of Bangladesh.
        </p>
        <p className={styles.view_para}>
          Fighting in the western frontier also intensified, although India had
          not yet launched a major counter-offensive. The Pakistanis mounted two
          substantial drives into Kashmir. There was fighting to the south on
          the Punjab plain. The Indians had, however, penetrated at least 15
          miles into West Pakistan in the direction of Karachi. Both sides
          continued to make air strikes on the western front, but neither yet
          gained the upper hand.
        </p>
        <p className={styles.view_para}>
          <a
            className={styles.clickLink}
            href="https://www.thedailystar.net/news/bangladesh/news/india-derides-un-proposal-ceasefire-2912216"
            target="_blank"
          >
            Link on Daily Star
          </a>
        </p>
      </div>
    </FadeRR>
  );
}

export default Dec0708;
