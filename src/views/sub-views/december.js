import SectionHeading from "../../components/SectionHeading.js";
import styles from "./css-modules/news.module.css";
import FadeRR from "react-reveal/Fade";

function December() {
  return (
    <FadeRR top distance="10px">
      <div className={styles.view_content_container}>
        <SectionHeading heading="The War Escalates" />
        <p className={styles.view_para_news}>
          On December 1, India attacked Darsana in Kushtia district and
          Shamshernagar in Sylhet district. 134 troops were killed by the
          Pakistan Army. Later, India added three more divisions backed by
          armor, artillery and Air Force on different fronts in East Pakistan.
        </p>
        <p className={styles.view_para_news}>
          On December 3, India was reported to have intensified the war.
          Meanwhile, anti-India rallies were reported at Khulna town. Hundreds
          of students demonstrated against Indian aggression.
        </p>
        <p className={styles.view_para_news}>
          By December 12, the Pakistan Navy was reported to have sunk three
          Indian naval gunboats. On the same day, the East Pakistan Government
          House in Dacca was bombed by the IAF (Indian Air Force), while 25
          people were killed by the IAF bombing in Lahore. By December 16, the
          civilian death toll due to IAF raids rose to 71.
        </p>
        <p className={styles.view_para_news}>
          Reports pertaining to lawlessness in Dacca were in circulation. Armed
          guerrillas proclaiming themselves as Mukti Bahini were reported to
          have been wreaking havoc in the city.
        </p>
        <p className={styles.view_para_news}>
          On December 28, the Indian Government was reported to have undertaken
          a policy decision that would allow Pakistan soldiers and civilians
          taken as prisoners in East Pakistan to be tried as “war criminals” by
          the so-called “Bangla Desh” Government.
        </p>
        <SectionHeading heading="International Affairs" />
        <p className={styles.view_para_news}>
          On December 12, the US President Nixon called on India to immediately
          halt its “armed attack” on Pakistan, and requested a fresh UN Security
          Council Meeting to preside over the situation. On December 13, Bhutto
          made an impassioned appeal to the UNSC to recognise territorial
          integrity and national unity for Pakistan. He added that a
          peace-initiative in the war-torn Subcontinent must include immediate
          ceasefire and the withdrawal of troops.
        </p>
        <p className={styles.view_para_news}>
          Pakistan was promised of continued support by China, which also voiced
          its refusal to acknowledge the so-called state of “Bangla Desh.”
        </p>
        <p className={styles.view_para_news}>
          Egyptian President Anwar Sadat also asserted that the East Pakistan
          issue was an internal matter, and did not warrant Indian invasion.
        </p>
        <p className={styles.view_para_news}>
          On December 28, Algeria and Tunisia appealed to India to withdraw its
          troops from East Pakistan.
        </p>
        <SectionHeading heading="Power Transfer" />
        <p className={styles.view_para_news}>
          On December 20, Bhutto became the new Pakistan President and Chief
          Martial Law Administrator, as Yahya Khan resigned. Bhutto announced
          his openness to negotiations with East Pakistan leaders “for a loose
          arrangement” to peacefully coexist. However, this was preconditioned
          by the withdrawal of Indian forces from East Pakistan.
        </p>
        <p className={styles.view_para_news}>
          On December 30, Bhutto announced his willingness to begin dialogues
          with India for peaceful living conditions. However, no compromise on
          Pakistan’s integrity was to be tolerated,
        </p>
      </div>
    </FadeRR>
  );
}

export default December;
