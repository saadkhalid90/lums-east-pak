import SectionHeading from "../../../components/SectionHeading.js";
import styles from "../css-modules/news.module.css";
import FadeRR from "react-reveal/Fade";

function Dec1516() {
  return (
    <FadeRR top distance="10px">
      <div className={styles.view_content_container}>
        <SectionHeading heading="December 15" />
        <p className={styles.view_para}>
          Pakistan's Foreign Minister Zulfikar Ali Bhutto, ripping up his notes
          as his face streaked with tears, walked out of the Security Council
          today after accusing it of legalising aggression and occupation of
          Pakistan.
        </p>
        <p className={styles.view_para}>
          Bhutto's parting words to the Council were: "Mr President, I am not a
          rat. I've never ratted in my life. I have faced assassination
          attempts, I've faced imprisonment. Today I am not ratting, but I am
          leaving your Security Council.
        </p>
        <p className={styles.view_para}>
          "I find it disgraceful to my person and to my country to remain here a
          moment longer. Impose any decision, have a treaty worse than
          Versailles, legalise aggression, legalise occupation—I will not be a
          party to it. We will fight. My country harkens for me.
        </p>
        <p className={styles.view_para}>
          "Why should I waste my time here in the Security Council? I will not
          be a party to the ignominious surrender of part of my country. You can
          take your Security Council; here you are. I am going."
        </p>
        <div class={styles.video_contain_center}>
          <div class={styles.video_contain}>
            <iframe
              src="https://www.youtube.com/embed/ZHkCVIn6ujM"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p className={styles.video_caption}>
              Bhutto walks out of the Security Council on December 15, 1971
            </p>
          </div>
        </div>
        <p className={styles.view_para}>
          <a
            className={styles.clickLink}
            href="https://www.thedailystar.net/news/bangladesh/news/bhutto-walks-out-tears-2917766"
            target="_blank"
          >
            Link on Daily Star
          </a>
        </p>
        <SectionHeading heading="December 16" />
        <p className={styles.view_para}>
          The Liberation War in Bangladesh formally ended with the unconditional
          surrender by the Pakistan army in Dhaka today. The instrument of
          surrender was signed at Dhaka at 4:31pm by Lt Gen AAK Niazi on behalf
          of Pakistan Eastern Command, and Lt Gen Jagjit Singh Aurora, Commander
          in Chief of Indian and Bangladesh forces in the eastern theater,
          accepted the surrender.
        </p>
        <p className={styles.view_para}>
          In a broadcast today Pakistan President Yahya Khan accepted that "we
          have been overwhelmed in the eastern sector". He, however, vowed to
          continue the fight in the western sector.
        </p>
        <p className={styles.view_para}>
          "We may lose a battle, but final victory in this war of survival shall
          Inshallah be ours. At this time, our hearts go out to our brethren in
          East Pakistan, who are being relentlessly subjected to terror and
          tribulation by the warlords of Bharat. To them we say: This is not the
          end," added Yahya.
        </p>
        <p className={styles.view_para}>
          <a
            className={styles.clickLink}
            href="https://www.thedailystar.net/news/bangladesh/news/bangladesh-wins-freedom-2918491"
            target="_blank"
          >
            Link on Daily Star
          </a>
        </p>
      </div>
    </FadeRR>
  );
}

export default Dec1516;
