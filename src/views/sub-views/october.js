import SectionHeading from "../../components/SectionHeading.js";
import styles from "./css-modules/news.module.css";
import FadeRR from "react-reveal/Fade";

function October({newspaper}) {
  const dawnStyles = `${styles.view_para_news} ${(newspaper === "Dawn") ? styles.boldAndGrey : styles.unBoldAndBlack}`;
  const jangStyles = `${styles.jang} ${(newspaper === "Jang") ? styles.boldAndGrey : styles.unBoldAndBlack}`;
  const nwaqtStyles = `${styles.nwakt} ${(newspaper === "Nawai Waqt") ? styles.boldAndGrey : styles.unBoldAndBlack}`;


  return (
    <FadeRR top distance="10px">
      <div className={styles.view_content_container}>
        <SectionHeading heading="Reported Acts of Indian Hostility" />
        <p className={dawnStyles}>
          <span className={jangStyles}>
            5 Oct: 27 villagers were reported to have been killed and 53 injured
            by India’s intensive artillery and mortar shelling on 17 border
            villages at Comilla, Sylhet and Jessore. A few days later, Indian
            artillery attacked 21 border villages of Jessore, Bogra, Sylhet,
            Rangpur, Rajshahi and Comilla Districts, killing 19 villagers and
            injuring 27. 8 Oct: 57 Indian agents kiled in Rajshahi, 43 ran away.
            9 Oct: if war happens, we’d be fighting inside indian territory,
            says General Niazi. 12 Oct: 111 indian agents killed. ‘It’s not
            mukti bahini, it’s the hindu army’. 15 Oct: war can start any time,
            says Yahya, and we are totally ready. On October 15, two Indian
            aircraft were reported to have trespassed into Pakistan territory,
            violating national airspace. Awami league carried out a procession
            of naked women. Without provocation, the Indian Army also shelled 24
            border villages of East Pakistan, killing 38 villagers and injuring
            57. [J, 16 oct: Hindu aggressors killed more than a hundred muslims
            in West Bengal.
          </span>
          On October 17, 34 villagers- mostly women and children- were reported
          to have been killed by unprovoked Indian artillery shelling at various
          border villages of East Pakistan. On August 3, Yahya Khan appointed
          Dr. A. M. Malik as the Governor of East Pakistan
        </p>
        <p className={dawnStyles}>
          On October 21, a correspondent from “The New York Times” reported that
          India had been preparing to seize areas of East Pakistan. Indian
          trains carrying arms for “Bangla Desh” guerrillas had been arriving in
          Calcutta daily.
          <span className={jangStyles}>
            22 oct: Pak army averts indian attack on dinajpur, 108 indian
            soldiers killed. Later, on October 25, “The New York Times” reported
            that India and the USSR had been jointly promoting the political
            separation of East Pakistan from Central Pakistani Government, and
            seeking its independence under Indian protection. 25 Oct: India has
            become a danger of global peace, says Yahya. 96 villagers killed
            because of mortar shelling from India on border. 26 Oct: More than
            65 civilians dead due to shelling at Komila. They only kill the
            muslims, the news feature adds.
          </span>
        </p>
        <SectionHeading heading="The Refugee Crisis and Humanitarian Aid" />
        <p className={dawnStyles}>
          Recent floods combined with the inability to provide adequate
          repatriation had aggravated the tragedy of refugees. Prince Sadruddin
          Aga Khan, U.N High Commissioner for Refugees suggested that “voluntary
          repatriation” was the best solution to the crisis; however, this could
          only be rendered possible by an agreement between India and Pakistan.
        </p>
        <p className={dawnStyles}>
          The US and Pakistan Governments reached an agreement, according to
          which the US would provide an additional amount of Rs. 5 crores for
          humanitarian relief efforts to East Pakistan.
        </p>
        <p className={dawnStyles}>
          On October 30, Yahya Khan offered to welcome “any international
          agency” to facilitate Pakistan on the issue of returning displaced
          persons back to East Pakistan. He insinuated India for exploiting the
          refugee problem.
        </p>
        <SectionHeading heading="International Affairs" />
        <p className={dawnStyles}>
          On October 1, it was reported that both the USA and USSR were strongly
          opposed to the resumption of hostilities between India and Pakistan.
          They agreed to operate as a moderating influence to prevent an
          imminent war in the Subcontinent. Later, around 50 non-aligned nations
          approved a communique that included a plea for international action on
          the refugee problem in East Pakistan.
          <span className={jangStyles}>
            2 Oct: Bangladeshi delegation kicked out of UN building. 3 oct:
            western countries refuse to reinstate aid to Pakistan. 6 Oct:
            afroasian conference rejects indian request to put bangladesh on
            agenda, citing it pakistan’s internal matter. On October 7, Turkey,
            Egypt and Syria expressed the viewpoint that the East Pakistan
            problem was Pakistan’s internal matter. 13 Oct: Pakistan will put
            the issue of indian aggression to UNSC. 29 oct: India asks USSR for
            help for war against Pakistan. Many more indian agents killed.
            Zionism is conspiring to separate East wing from Pakistan, says
            Iraqi General Mahmood Khatab. Hindus are killing muslims through
            muslim hands, it adds.
          </span>
        </p>
        <SectionHeading heading="Pakistan’s Domestic Affairs" />
        <p className={dawnStyles}>
          On October 6, Yahya Khan summoned universities to stress emphasis on
          the ideology of Pakistan while disseminating knowledge. On October 8,
          the Pakistan Muslim League chief, Khan Abdul Qayyum Khan, appealed to
          Pakistan’s youth to join the Razakar movement, with the spirit of
          Jihad to defend the country.
        </p>
        <p className={dawnStyles}>
          On October 9, the Chief Martial Law Administrator lifted the ban on
          political activities- the ban had been imposed on March 26 last under
          Martial Law Regulation No 76.
          <span className={jangStyles}>
            10 oct: we need the control of government from the start of new
            year, says bhutto.
          </span>
        </p>
        <p className={dawnStyles}>
          With the fears of war rising, on October 12, Yahya Khan warned that
          the “feverish military preparations” by India could culminate into a
          “war of aggression against Pakistan at short notice.” He further
          assured the nation that “your valiant Armed Forces are fully prepared
          to defend and protect every inch of the sacred soil of Pakistan.”
          Yahya Khan was also being urged to postpone elections, as they were
          deemed as inconceivable under the present circumstances.
        </p>
      </div>
    </FadeRR>
  );
}

export default October;
