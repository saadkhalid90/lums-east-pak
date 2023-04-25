import SectionHeading from "../../components/SectionHeading.js";
import styles from "./css-modules/news.module.css";
import FadeRR from "react-reveal/Fade";
import { useEffect } from "react";

function April({newspaper}) {
  const dawnStyles = `${styles.view_para_news} ${(newspaper === "Dawn") ? styles.boldAndGrey : styles.unBoldAndBlack}`;
  const jangStyles = `${styles.jang} ${(newspaper === "Jang") ? styles.boldAndGrey : styles.unBoldAndBlack}`;
  const nwaqtStyles = `${styles.nwakt} ${(newspaper === "Nawai Waqt") ? styles.boldAndGrey : styles.unBoldAndBlack}`;


  return (
    <FadeRR top distance="10px">
      <div className={styles.view_content_container}>
        <SectionHeading heading="India Gets Involved" />
        <p className={dawnStyles}>
          On 31st March, the Indian Parliament unanimously adopted a resolution
          expressing solidarity with the people of East Pakistan and assured
          them with the provision of “whole hearted support.” The resolution
          moved by the Indian Prime Minister, Indira Gandhi was considered as a
          hostile and outrageous act by Pakistan. Meanwhile, life in East
          Pakistan gradually returned to normal economic life as peaceful
          conditions prevailed.
          <span className={jangStyles}>
            As reports of peace came from Dhaka, Tikka Khan said that work hard
            must be directed towards rectifying the economic loss. As operations
            against insurgents in Chaatgaam were concluded, Maududi claimed that
            the Hindu and Christian nexus against the integrity of Islam has
            been neutralised. Jamiat e Ulema blamed Mujib’s inflexibility,
            praised Yahya, and threatened jihad against India.
          </span>
        </p>
        <SectionHeading heading="Tensions Escalate With India" />
        <p className={dawnStyles}>
          On 1st April, reports of infiltration of armed Indians in the border
          areas of East Pakistan were received. The situation deteriorated and
          Pakistan warned India of “serious consequences” if India continued to
          intervene in Pakistan’s internal affairs. Indian authorities were also
          reported to have taken measures to supply the insurgent elements with
          arms and ammunition.
          <span className={jangStyles}>
            In view of the new situation, Maududi asked for the implementation
            of the constitutional draft of 1954. At the same time, the supply of
            water and electricity was restored in East Pakistan. Those who had
            left the region due to riots now requested for facilitation in their
            return to their homes.
          </span>
          While discussing the exploitation of the people of Bangladesh, he
          asserted that Socialism would resolve their problems. There were
          rampant economic problems in the province with an unemployed
          population of 70 lakh people. Over the past 23 years, not even 15% of
          its people had acquired positions in the Central Government or Armed
          Forces. Despite earning a bulk of the foreign exchange, 80% of the
          foreign exchange was spent on West Pakistan.
        </p>
        <p className={dawnStyles}>
          <span className={jangStyles}>
            Bhutto states that he was not surprised at Indian aggression and the
            government should not hesitate to take the necessary measures. JUI
            claimed that it would prepare mujahideen in case a jihad is
            declared. It was reported that India had been constantly rolling out
            baseless propaganda, with even newspapers in Occupied Kashmir
            boycotting it.
          </span>
          On 4th April, India airlifted additional troops to East Pakistan’s
          border.
          <span className={jangStyles}>
            A group of Indian cars was destroyed on their way to Sylhet.
          </span>
          Several advocates from East Pakistan also condemned India, claiming
          that the “blatant interference aimed at undoing Pakistan.”
        </p>
        <p className={dawnStyles}>
          <span className={jangStyles}>
            There were atttempts to frame the issue as one of Hindu aggression:
            Mujib was portrayed as a pawn of the enemy, and Indian agent. On 5
            April, India deployed 5 divisions of its army on its East Pakistan
            border. In order to combat Indian aggression, China too began to
            deploy forces on its border with India. More East Wing leaders under
            the leadership of Nurul Amin
          </span>
          met General Tikka Khan, offered full cooperation, and condemned Indian
          action. On April 6, the situation aggravated in the state of West
          Bengal following reports of liquidation of Bengali soldiers by the
          Pakistan Army in East Wing.
          <span className={jangStyles}>
            Yahya, meanwhile, state that the population had not given Awami
            League the right to undo the country, while Bhutto expressed faith
            in China to come to Pakistan’s aid.
          </span>
        </p>
        <SectionHeading heading="India’s Appeal to the UN" />
        <p className={dawnStyles}>
          In the United Nations, India claimed that it had been showing "great
          restraint,” and summoned the international community to take action
          against Pakistan Army’s increasing “repression” in East Pakistan. On
          April 6, the UN Secretary-General U Thant assured that the situation
          in East Pakistan was strictly within the domestic jurisdiction of
          Pakistan, and did not warrant a UN intervention.
        </p>
        <SectionHeading heading="China’s Criticism of India" />
        <p className={dawnStyles}>
          On April 8, China voiced criticism against India’s interference in
          Pakistan’s domestic affairs and warned India that it had been
          “flagrantly interfering in the internal affairs of Pakistan.” Later,
          China reaffirmed support against Indian aggression. On April 12, the
          Chinese Prime Minister, Chou En-Lai assured that China would firmly
          support Pakistan in its struggle to safeguard state sovereignty
          against Indian oppression.
        </p>
        <SectionHeading heading="Coverage of Indian Infiltration by International Press" />
        <p className={dawnStyles}>
          The “Yorkshire Post” expressed in an editorial that if India used the
          East Pakistan situation as a pretext for intervention, it would birth
          grave consequences. Arab newspapers also expressed fervent hopes for
          the preservation of Pakistan’s integrity and admonished foreign
          interference in its internal affairs. Examples of such newspapers
          include Beirut’s dailies “Star” and “Al-Shaab.” On 5th April, the
          infiltration of terrorist gangs from West Bengal into the border
          regions of East Pakistan along with the smuggling of armaments was
          confirmed by newspaper reports in “The Times” and the “Guardian.’
        </p>
        <SectionHeading heading="Pakistan’s Armed Forces Regain Control of East Pakistan" />
        <p className={dawnStyles}>
          <span className={jangStyles}>
            On 6th April, Pakistan army took a great pile of Indian ammunition
            in its possession. On 7th April, Pak Army neutralised 20000 Indian
            terrorists, while on 8th April, Sylhet, Rangpur, and Rajshahi were
            cleared of terrorists. Reports showed that 4 Indian battalions were
            already involved in terrorist activities, while two more battalions
            sought entry into East Paktstan. As anti-Hindu sentiment grew, there
            were fears that India will vent out its frustrations from East
            Pakistan in Kashmir.
          </span>
          On April 9, it was claimed that Chittagong had been cleared off
          anti-state elements, most of whom had allegedly surrendered to the
          Army. Economic activity also gained further momentum, as peace-loving
          citizens cooperated with the local Martial Law authorities, according
          to sources.
        </p>
        <p className={dawnStyles}>
          <span className={jangStyles}>
            PPP delcared that the blame for the actions of Awami League couldn’t
            be laid on 7 crore Pakistanis and that PPP will struggle for the
            rights of the people of East Pakistan. On 10th April, Tikka Khan
            took oath as the governor of East Pakistan. On 11th April, a peace
            committee consisting of 40 notable citizens of Dhaka was formed.
          </span>
          <span className={jangStyles}>On 12th April, </span>
          two Indian BSF (Border Security Force) companies operating within the
          Pakistan territory, particularly{" "}
          <span className={jangStyles}>Jessore</span>, were wiped out by the
          Pakistan Army.
        </p>
        <p className={dawnStyles}>
          <span className={jangStyles}>
            On 14th April, it is reported that both Pakistan and Indian armies
            had assembled before each other and a full scale war in Binapol was
            likely at any moment. At the same time, there were reports of
            pro-Pakistan protests in Dhaka.
          </span>
          On 18th April, Pakistan Army was said to have secured Akhaura and
          Brahmanbaria in Comilla sector and Meherpur in the Kushtia region,
          without meeting any resistance - disproving India’s claim that
          Brahmanbaria was the stronghold of anti-State elements.
          <span className={jangStyles}>
            On 20th April, Tikka Khan declared that Pak Army will not allow East
            Pakistan to become a slave of India. Official report on the
            hijacking of an Indian plane in January was released where it was
            concluded that it was orchestrated by Indian Intelligence.
          </span>
        </p>
        <p className={dawnStyles}>
          <span className={jangStyles}>
            It was claimed in the newspapers that the goons of the Awami League
            used to kidnap girls from noble families and bring them to the Dhaka
            University.
          </span>
          The troops had already secured Chittagong, Noakhalil, Barisal and
          Patuakhali, and were engaged in operations in the coastal region. By
          27th April, the entire coastal belt of East Pakistan was said to have
          been secured by the Armed Forces. A band of around 300 Indian
          infiltrators was said to have been wiped out and huge quantities of
          arms and ammunition acquired. However, India was also deemed to be
          mobilising more infiltrators - up to 10,000 ex-servicemen - to
          facilitate insurgents in East Pakistan.
        </p>
        <SectionHeading heading="An Independent Republic of “Bangla Desh”?" />
        <p className={dawnStyles}>
          <span className={jangStyles}>
            On 15th April, an official Bangladeshi government is established
            with Mujib as the Rashttar Pati and Tajuddin as the Prime Minister.
            Pakistan announces that it would consider the recognition of this
            government an act of aggression.
          </span>
          The troops had already secured Chittagong, Noakhalil, Barisal and
          Patuakhali, and were engaged in operations in the coastal region. By
          27th April, the entire coastal belt of East Pakistan was said to have
          been secured by the Armed Forces. A band of around 300 Indian
          infiltrators was said to have been wiped out and huge quantities of
          arms and ammunition acquired. However, India was also deemed to be
          mobilising more infiltrators - up to 10,000 ex-servicemen - to
          facilitate insurgents in East Pakistan.
        </p>
        <p className={dawnStyles}>
          <span className={jangStyles}>
            Yahya planned to present a constitution with a strong center and
            sufficient provincial autonomy.
          </span>
          Meanwhile, normalcy was observed in Jessore, Kushtia and Khulna as the
          Pakistan Army secured main points on Indo-Pakistan border in the
          Western region.
          <span className={jangStyles}>
            At the same time, anti-India and anti-Hindu sentiment flared in
            Pakistan. At the same time, the violence of the Awami League was
            criticised.] [J: On 22nd April, the hotel where Pakistani Deputy
            High Commissioner was living in Kolkata was attacked by Indian
            protestors. The next day, Pakistan shut down its embassy in Kolkata
            and ordered India to do the same in Dhaka.
          </span>
        </p>
        <p className={dawnStyles}>
          <span className={jangStyles}>
            As numerous members of the Jamaat E Islami were killed by the
            separatists, an ordinance for the control of newspapers was imposed
            on 26th April. On 27th April, India placed restrictions on the
            members of the Pakistani consulate. They were not allowed to leave
            the country without the government’s permission. The same
            restriction applied to their servants and family. Pakistan protested
            against this violation of norms. On 30th April, it was reported that
            ammunition had been found from the houses of the elected members of
            the Awami League.
          </span>
        </p>
      </div>
    </FadeRR>
  );
}

export default April;
