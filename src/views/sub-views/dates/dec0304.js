import SectionHeading from "../../../components/SectionHeading.js";
import styles from "../css-modules/news.module.css";
import FadeRR from "react-reveal/Fade";

function Dec0304() {
  return (
    <FadeRR top distance="10px">
      <div className={styles.view_content_container}>
        <SectionHeading heading="December 03" />
        <p className={styles.view_para}>
          Pakistan today launched an undeclared full-scale war on India.
          Pakistan made air strikes on a number of airfields in the western
          region of India and began shelling several places. Immediately, the
          Indian armed forces were ordered to hit back at the Pakistan army. The
          joint command of the Mukti Bahini continued advancing inside
          Bangladesh.
        </p>
        <p className={styles.view_para}>
          <a
            href="https://www.thedailystar.net/news/bangladesh/news/today-the-war-bangladesh-has-become-war-india-indira-2908451"
            target="_blank"
          >
            Link on Daily Star
          </a>
        </p>
        <SectionHeading heading="December 04" />
        <p className={styles.view_para}>
          Yahya accused India today of having launched a full‐scale war and told
          his countrymen it was time "to give a crushing reply to the enemy".
        </p>
        <p className={styles.view_para}>
          "We are fighting for our country's integrity and honour," he said in a
          broadcast. "God is with us in our mission.
        </p>
        <p className={styles.view_para}>
          "Our enemy has once again challenged us -- India's government has
          launched a full‐scale war on us," he said.
        </p>
        <p className={styles.view_para}>
          Speaking in Urdu, although he normally addresses the nation in
          English, Yahya said India's "hate and enmity" toward Pakistan were
          known to "the whole world".
        </p>
        <p className={styles.view_para}>
          "India has always tried to weaken and ruin Pakistan -- this is India's
          biggest and final war against us," he said.
        </p>
        <p className={styles.view_para}>
          He addressed his countrymen as "120 million Mujahids", followers of
          Islam. "The time has come for the heroic Mujahids of Pakistan to give
          a crushing reply to the enemy," he declared.
        </p>
        <p className={styles.view_para}>
          <a
            href="https://www.thedailystar.net/news/bangladesh/news/my-aim-make-pakistan-armed-forces-surrender-lt-gen-aurora-2909081"
            target="_blank"
          >
            Link on Daily Star
          </a>
        </p>
      </div>
    </FadeRR>
  );
}

export default Dec0304;
