import SectionHeading from "../../../components/SectionHeading.js";
import styles from "../css-modules/news.module.css";
import FadeRR from "react-reveal/Fade";

function Dec1314() {
  return (
    <FadeRR top distance="10px">
      <div className={styles.view_content_container}>
        <SectionHeading heading="December 13" />
        <p className={styles.view_para}>
          In a letter to the UN Secretary General U Thant, Indian Prime Minister
          Indira Gandhi said "there can be a ceasefire and withdrawal of Indian
          armed forces" if Pakistan withdraws its troops from Bangladesh and
          reaches a political solution with the leaders there. She added if
          there was an assurance that the basic causes would be objectively
          examined, India "will not be found wanting in offering its utmost
          cooperation".
        </p>
        <p className={styles.view_para}>
          The Soviet Union also vetoed in the Security Council tonight a United
          States resolution calling for an immediate ceasefire and withdrawal of
          Indian and Pakistani forces to their own sides of the border. Within a
          span of nine days, it was the third Soviet veto of such a resolution.
          Eleven council members voted for the resolution; Britain and France
          abstained. Poland joined the Soviet Union in opposition.
        </p>
        <p className={styles.view_para}>
          Mitro Bahini today continued their three‐pronged advance on Dhaka and
          an Indian spokesman declared that "within 24 to 48 hours we will be in
          a very strong position around Dhaka".
        </p>
        <p className={styles.view_para}>
          General SFHJ Manekshaw, the Indian army chief of staff, made a third
          appeal tonight to the Pakistan generals in East Pakistan urging them
          to surrender because "your garrisons are now within the range of my
          artillery".
        </p>
        <p className={styles.view_para}>
          The western front was reported largely quiet today, with the only
          significant action reported in northern Kashmir, where the Indians
          said they had taken two more mountain posts near Kargil.
        </p>
        <p className={styles.view_para}>
          <a
            href="https://www.thedailystar.net/news/bangladesh/news/third-soviet-veto-bars-truce-plan-2916016"
            target="_blank"
          >
            Link on Daily Star
          </a>
        </p>
        <SectionHeading heading="December 14" />
        <p className={styles.view_para}>
          With the reported movement of American naval squadron, the 83rd
          Brigade of the 23rd Indian Division along with Mukti Bahini rushed to
          Chittagong assuming that the American task force might attempt to
          establish a beachhead somewhere near Chittagong. The Chittagong Port
          was severely pounded from the sea and the air. Many ships were damaged
          and sunk in the river completely blocking the shipping channel.
        </p>
        <p className={styles.view_para}>
          Mitro Bahini troops were advancing rapidly from the north and
          northwest and had reached within six miles of Dhaka. A Pakistani
          brigade commander close to the Dhaka garrison was reported to have
          surrendered.
        </p>
        <p className={styles.view_para}>
          The New York Times reported that Indian MIG jets flew back and forth
          across Dhaka city in the afternoon, strafing with rockets at low level
          and meeting virtually no resistance.
        </p>
        <p className={styles.view_para}>
          <a
            href="https://www.thedailystar.net/news/bangladesh/news/malik-cabinet-resigns-en-masse-2916836"
            target="_blank"
          >
            Link on Daily Star
          </a>
        </p>
      </div>
    </FadeRR>
  );
}

export default Dec1314;
