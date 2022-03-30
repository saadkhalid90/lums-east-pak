import SectionHeading from "../../../components/SectionHeading.js";
import styles from "../css-modules/news.module.css";
import FadeRR from "react-reveal/Fade";

function Dec0910() {
  return (
    <FadeRR top distance="10px">
      <div className={styles.view_content_container}>
        <SectionHeading heading="December 09" />
        <p className={styles.view_para}>
          Pakistan informed the United Nations today that she had "decided to
          accept" the General Assembly's call for ceasefire and for a withdrawal
          of hostile troops to their own soil.
        </p>
        <p className={styles.view_para}>
          In message to UN Secretary General U Thant, Pakistani chief delegate
          Agha Shahi said, "Under the instructions of my Government, I have the
          honor to state that even though the resolution fails to take note of
          the Indian aggression against Pakistan (which has been admitted by
          India), the Government of Pakistan has decided to accept the call for
          an immediate ceasefire and the withdrawal of troops contained in that
          resolution.
        </p>
        <p className={styles.view_para}>
          Indian aircraft attacked Karachi harbor and city early today, sinking
          one merchant ship and killing more than 60 civilians, the Pakistan
          radio reported. The radio said that a second ship had been set ablaze
          and a third, a foreign vessel, had been seriously damaged. In an
          earlier attack during the night, Indian planes struck a petroleum
          storage tank near the harbor and set it on fire, the radio added.
        </p>
        <p className={styles.view_para}>
          The commander of India's eastern forces Lieut. Gen. Jagjit Singh
          Aurora said tonight that the retreat of the Pakistanis in East
          Pakistan had become a rout as Mitro Bahini continued to push the Pak
          troops into an ever-shrinking circle whose center is Dhaka. He added
          that the air force had had "a field day" the last 24 hours, shooting
          up river boats loaded with Pakistani troops trying to escape.
        </p>
        <p className={styles.view_para}>
          <a
            href="https://www.thedailystar.net/news/bangladesh/news/pakistan-accepts-truce-call-un-2913121"
            target="_blank"
          >
            Link on Daily Star
          </a>
        </p>
        <SectionHeading heading="December 10" />
        <p className={styles.view_para}>
          Mitro Bahini had bypassed or encircled major border towns, including
          Cumilla, Rangpur, Dinajpur and Sylhet, in the drive towards Dhaka. At
          least one Pakistani brigade was cut off in the Chattogram area. A
          brigade at Jessore reportedly retreated to the Kushtia area in the
          north.
        </p>
        <p className={styles.view_para}>
          On the western front, Pakistanis launched a large attack in the Chhamb
          area of southwestern Kashmir.
        </p>
        <p className={styles.view_para}>
          <a
            href="https://www.thedailystar.net/news/bangladesh/news/mitro-bahini-closing-dhaka-2914011"
            target="_blank"
          >
            Link on Daily Star
          </a>
        </p>
      </div>
    </FadeRR>
  );
}

export default Dec0910;
