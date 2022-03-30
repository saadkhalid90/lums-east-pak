import SectionHeading from "../../components/SectionHeading.js";
import styles from "./css-modules/news.module.css";
import FadeRR from "react-reveal/Fade";

function September() {
  return (
    <FadeRR top distance="10px">
      <div className={styles.view_content_container}>
        <SectionHeading heading="Affairs in India and East Pakistan" />
        <p className={styles.view_para_news}>
          <span className={styles.nwakt}>
            Every day editorials, features and columns appear on hindus
            conspiring against muslims in East Pakistan.
          </span>
          On August 3, Yahya Khan appointed Dr. A. M. Malik as the Governor of
          East Pakistan
          <span className={styles.nwakt}>
            Nawai Waqt reports it on first September. He was previously working
            as Special Assistant to the President for East Pakistan displaced
            persons. Now, he was authorised to have a council of 12 ministers,
            and the Armed Forces were asked to revert to their defence-related
            role. 1 Sep: 87 bundles of ammunition and bombs captured near
            Tangeel by Pakistan army. 2 Sep: censorship ended from newspapers in
            east pakistan. India has increased its army to 8.25 lac soldiers. 4
            sep: public amnesty for people indicted of crimes in East pakistan.
            Indian government pushing muslims out of Assam. Multiple spies
            arrested. 8 sep: more than 800 ulemas killed. Indian police opens
            fire on a separatist procession of 15000 people.
          </span>
          <span className={styles.jang}>
            15 Sep: Pak army neutralizes attack by Indian army on east pakistan
            border, Indians leave 60 bodies and weapons and fled from the scene.
            Large number of indian army also gathered on west pakistan border
            too.
          </span>
          <span className={styles.nwakt}>
            18 sep: 78 indian instigators killed at Sylhet. 20 Sep: 20 muslims
            and 60 mosques martyred in Rajhastan. 28 Sep: patriotic east
            pakistanis are being branded by the words of ‘bangladesh’ on their
            arms and chest. 29 Sep: of the people sent by india to destroy
            warships, 10 dead, 3 arrested.
          </span>
        </p>
        <p className={styles.view_para_news}>
          A special economic body for East Pakistan was stressed by the East
          Pakistan Jamaat-i-Islami chief, Ghulam Azam. He recommended the
          creation of a special Economic Commission with its headquarters in
          Dacca, in order to assess the economic setback and suggest measures
          for recovery.
        </p>
        <p className={styles.view_para_news}>
          The flood situation was also improving. However, the devastating flood
          had incurred a loss of 110 lives and Rs. 470m worth of financial loss.
        </p>
        <p className={styles.view_para_news}>
          The future of displaced students from East Pakistan seemed uncertain.
          A large number of students from Medicine, Polytechnics and Engineering
          had migrated to West Pakistan. On September 3, they were informed that
          their admissions to W. Wing institutions could not be rendered
          permanent as per directives of the Governors Conference. This made the
          students feel increasingly anxious and frustrated about their academic
          futures.
        </p>
        <p className={styles.view_para_news}>
          Meanwhile, on September 28, it was reported that the trial of Sheikh
          Mujib ur Rahman for waging war against Pakistan was in progress. The
          prosecution had so far examined 20 witnesses and issued a warning was
          issued against contempt of court.
        </p>
        <SectionHeading heading="The Question of By-Elections" />
        <p className={styles.view_para_news}>
          On September 1, Yahya Khan announced that by-elections would be held
          as planned, despite India relentlessly attacking and bombing the
          frontiers of East Pakistan.
          <span className={styles.nwakt}>
            9 sep: Bhutto postpones the plan to meet Yahya Khan.
          </span>
          On September 19, the Election Commission announced that by-elections
          for the National and Provincial assemblies would be held in East
          Pakistan from November 25 till December 9. However, the Chief Election
          Commissioner postponed them and rescheduled from December 12 till
          December 23.
          <span className={styles.nwakt}>
            31 sep: we don’t want to clash with the government but it should be
            handed to us, says Bhutto. Weapons made in indian factories being
            used against pakistan in east wing.
          </span>
        </p>
        <SectionHeading heading="Aid for East Pakistan" />
        <p className={styles.view_para_news}>
          The Japanese government decided to provide additional aid worth 900
          million yen for East Wing displaced persons in India.
        </p>
        <p className={styles.view_para_news}>
          By September 7, six countries and international organisations had
          indicated some level of aid for relief in East Pakistan. Around 20
          million dollars worth of aid was accumulated in the form of goods and
          material. The sources were Belgium, Netherlands, Canada, USA, Japan,
          the UNICEF. Support from the USA was specifically urged by John A.
          Hannah, Director of the Agency for International Development. On
          September, the Agency for International Development declared that the
          USA would provide an additional 210,000 tons of food-grains to East
          Pakistan.
        </p>
        <p className={styles.view_para_news}>
          On September 28, it was announced that a master plan was being
          implemented by the Pakistan Government to provide adequate food
          supplies to East Pakistan. The regular shipment flow would ensure the
          physical availability of food-grains to the people of East Pakistan.
        </p>
        <SectionHeading heading="Amnesty and Power Transfer" />
        <p className={styles.view_para_news}>
          <span className={styles.nwakt}>
            5 Sep, Yahya Khan granted a general amnesty to “all those who have
            committed or alleged to have committed offences during the
            disturbances in East Pakistan beginning March 1 last and ending Sept
            5.” This amnesty was also to be extended to the Armed Forces,
            Police, the East Pakistan Rifles, Mujahids and Ansars.
          </span>
          <span className={styles.jang}>
            19 sep: by-elections announced for east pakistan from 25th november
            to 9th december. 22 sep: by-elections delayed, now to be started on
            12th december.
          </span>
          <span className={styles.nwakt}>
            22 sep: by-elections delayed, now to be started on 12th december.
          </span>
        </p>
        <p className={styles.view_para_news}>
          Bhutto emphasised that power transfer was the only solution to the
          prevalent political crisis. He met Yahya Khan in order to discuss the
          lingering situation. The talks were reported to be satisfactory, but
          inconclusive and to be resumed in the near future. Yahya Khan declared
          that the National Assembly would be allowed to amend the Constitution,
          as long as the changes subscribed to the ideological and territorial
          integrity of Pakistan.
        </p>
      </div>
    </FadeRR>
  );
}

export default September;
