import SectionHeading from "../../components/SectionHeading.js";
import styles from "./css-modules/news.module.css";
import FadeRR from "react-reveal/Fade";

function November({newspaper}) {
  const dawnStyles = `${styles.view_para_news} ${(newspaper === "Dawn") ? styles.boldAndGrey : styles.unBoldAndBlack}`;
  const jangStyles = `${styles.jang} ${(newspaper === "Jang") ? styles.boldAndGrey : styles.unBoldAndBlack}`;
  const nwaqtStyles = `${styles.nwakt} ${(newspaper === "Nawai Waqt") ? styles.boldAndGrey : styles.unBoldAndBlack}`;


  return (
    <FadeRR top distance="10px">
      <div className={styles.view_content_container}>
        <SectionHeading heading="Situation Deteriorates in East Wing" />
        <p className={dawnStyles}>
          <span className={jangStyles}>
            On 1 Dec, it was reported that 28 Pakistanis had been martyred by
            Indian bombing, that the convener of the Peace Committee had been
            shot; and that 200 Razakars took oath in Rajshahi to protect
            Pakistan. On 2 Dec, 37 villagers were reported to have been killed
            by Indian bombing, while the Razakars killed 18 Indian agents; Dr
            Jagjit Singh is also says that all Sikhs will sacrifice everything
            for the formation of an independent Sikh state. An Indian attack was
            reported to have been foiled, while 72 Indians were killed in
            Sylhet, Dinapur, and Rajshahi. Nurul Amin says that there is no
            reason for the establishment of a national representative
            government. On 4 November, it was reported that Indian attacks on
            the villages near the border had killed 14 villagers. An attempt by
            Indian agents to grab Pakistani area was also foiled – 82 Indian
            agents killed or injured - as calls for the military training of the
            youth to protect Pakistan were made. On 5 Nov it was reported that a
            more than 600 000 strong Indian army, laced with weapons supplied by
            Italy, Russia, Czechoslovakia, and Poland, was ready for an attack.
            There were calls for a celebration of Yaum-e-Jihad on 17 Ramadan,
            while some leaders demanded proportional seats for Hindu students.
            In India 10000 Sikhs voluntarily give themselves up for arrest. On 6
            Nov, it was reported that 3 attacks of the Rajput regiment on Memon
            Singh had been foiled. 148 Indians were killed, more than 200
            injured. Barbaric Indian bombing left 17 villagers dead.
          </span>
          On November 6, instances of stabbing, firing and bombing were reported
          in Dacca and Narayanganj, resulting in the deaths of 3 persons and
          woundings of 4.
          <span className={jangStyles}>
            On 7 Nov, Bhutto is reported to have met Zhou Enlai, who assures
            Pakistan of Chinese support against aggression. At the same time, an
            Indian attempt to capture the border villages in Sylhet was foiled.
            Indian bombing also destroyed a passenger bus, injuring 50. On 9
            Nov, terrorists were reported to have killed 4 people, including a
            member of Assembly, in Dhaka.
          </span>
        </p>
        <p className={dawnStyles}>
          On November 10, Pakistan Armed Forces were reported to have
          counter-acted a major Indian offensive in Belonia bulge of Naokhali
          district.
          <span className={jangStyles}>
            40 Indians were killed and 80 injured.
          </span>
          The offensive was supported by tanks and machine guns.
          <span className={jangStyles}>
            40 Indians were killed and 80 injured.
          </span>
          <span className={jangStyles}>
            India also dropped 1600 bombs on 18 villages. On 10 Nov a stupendous
            break was reported between the traitor Awami League and Mukti
            Bahini. Brigadier Zia was removed, Major Musharraf killed. On 11 Nov
            another Indian attack on Comilla was reported to have been repulsed,
            while terrorists destroyed a railway station and electricity
            powerhouse in Dhaka. It was also reported that Bangladesh was not a
            popular movement, that of the 6 crore people, a mere 8-10 lakh
            supported it. On 12 Nov, the Razakars were reported to have saved a
            bridge from destruction, killing 6 Indian agents. On 13 Nov, it was
            reported that Indian indiscriminate bombing of 28 villages killed 23
            villagers. Razakars sunk 4 boats of Indian agents. A bomb blast in
            Baitul Mukarram in Dhaka kills 5, injuring 54. On 14 Nov, the Army
            was reported to have foiled 5 Indian attacks, killing 94 Indians.
            Indian bombing killed 14 villagers. Nurul Amin recommends the
            increase in the number of Razakars from 1 lac to 5 lac. On 15 Nov,
            it is reported that Pakistan army repelled an Indian attack on
            Kishtia, killing 24 Indians and capturing 6. 72 people were killed.
            Hundreds of Indian agents were also involved in the attack. 48 of
            them were killed. 4 Pakistanis were killed, 9 injured. Near Comilla,
            Indian soldiers and agents were pushed back to India and 135 agents
            taken care of. There was unrest reported in India where Sikhs and
            the police clashed in Jalandhar and Ludhiana. On 17 Nov, it is
            reported that Indian bombing on Comilla has killed 56 and injured
            many.
          </span>
        </p>
        <p className={dawnStyles}>
          On November 19, a bomb blast at the local office of the Central
          Department of Films and Publications (DFP) in Dacca was reported.
        </p>
        <SectionHeading heading="Indira Gandhi’s Statement " />
        <p className={dawnStyles}>
          <span className={jangStyles}>
            On 2 Nov, Gandhi said that Pakistan should hold talks with the
            leaders of Bangladesh, while Yahya says that the establishment of
            Bangladesh would be an act of war. Indira’s visit to the West is an
            attempt to convince the world for a war.
          </span>
          On November 9, Indira Gandhi was reported to have reiterated her claim
          that “Independent Banga Desh was inevitable.” Addressing a press
          conference, she repeated statements about “genocide” in East Pakistan
          and called the Western world to rally for India’s support and upkeep
          of the “avalanche of refugees.”
          <span className={jangStyles}>
            Bhutto said that if there is a war, the colour of the Indus and the
            Ganges would change. On 12 Nov, Gandhi says that without the release
            of Mujib the refugees cannot go back. On 18 Nov, Indira is reported
            to have said that a war is inevitable and that the issue of
            Bangladesh will be solved in a couple of months. Jagjeevan Singh,
            Indian Minister of Defense,says that the soldiers of Bangladesh will
            capture E Pak in a year.
          </span>
        </p>
        <SectionHeading heading="International Affairs" />
        <p className={dawnStyles}>
          On November 12, the “Guardian” reported from London that increasing
          evidence of augmentation of Indian arms supply to guerrillas had been
          revealed. This followed the Russian assurance of replenishing Soviet
          weapons to India.
        </p>
        <p className={dawnStyles}>
          China called India to end its policy of interference in Pakistan’s
          internal affairs and blamed it for the exacerbating refugee crisis.
        </p>
        <SectionHeading heading="Political Situation in Pak" />
        <p className={dawnStyles}>
          <span className={jangStyles}>
            On 15 Nov, Nurul Amin is reported to have stated that if the seat of
            power is not given to an E Pak, the country wouldn’t stay united. On
            16 Bhutto is reported to have responded by saying that if the PM is
            to be from E Pak, the President must be from W Pak. He also said
            that while Nurul Amin got one seat and became the representative of
            the whole province, his party won a hundred seats; even then 6
            parties are not willing to accept it as representative. On 17 Nov, a
            united parliamentary party was reported to have been formed from the
            merger of 7 parties (Jamaat E Islami, 3 Muslim Leagues, PDP, Nizam E
            Islam, and Jamiat Ulema Pak). Nurul Amin will be the leader. It has
            82 members in the National Assembly. Some statements hold that the
            people of E Pak wouldn’t be satisfied with a PM with no real power.
            The people of W Pak should become Razakars and go to E Pak. Bhutto
            warns that if the rights of the PPP are snatched, there will be a
            revolution, while Nurul Amin says that after the transfer of power
            the Bangladesh stunt would die on its own. On 20 Nov, the leaders of
            the unified parties are reported to have said that if Bhutto is not
            made to follow law, there will be bloodshed, while Bhutto says that
            it would be a disgrace to the nation if those defeated set up a
            government. On 21 Nov, Bhutto is reported as saying that the coward
            leaders are afraid of the revolution, while calls were made for the
            linguistic unity of both Wings, with one recommendation being the
            turning of Bangla font to Arabic. Those recommending a referendum
            are the enemies of Pakistan, the people of E Pak gave their verdict
            in 1947. On 26 Nov Bhutto is reported as saying that only a truly
            representative govt only can take control of the crisis. On 28 Nov,
            it is reported that all factions of the AL party have been banned.
            They are enemies of Pak, says Yahya, and Bhashani was the first in E
            Pak to begin the separatist movement, while Prof Muzaffar leads the
            rebels from India. Governor of E Pak Dr Malik says that even people
            of the outlawed AL find the cry of “Bangladesh” a joke and that a
            lot of terrorist, disappointed, have given themselves up to the
            govt.
          </span>
        </p>
        <SectionHeading heading="The War Begins" />
        <p className={dawnStyles}>
          On November 22, India without issuing a war declaration had launched
          an all-out offensive against East Pakistan. This proceeded a month of
          border skirmishes and the build-up of above 12 Indian infantry
          divisions.
        </p>
        <p className={dawnStyles}>
          On November 23, Pakistan Armed Forces were reported to have
          annihilated an Indian Battalion at Comilla, killing 19 enemy soldiers.
          <span className={jangStyles}>
            7 enemy tanks destroyed in a terrible war or the border of Jessore.
            The attack of 2 brigades of foot soldiers, a tank regiment, and
            armoured cars repelled. 90 Indians killed, 160 injured. 4 Pakistanis
            were martyred defending, 7 injured.
          </span>
          Meanwhile, Yahya Khan announced a State of Emergency in the country.
        </p>
        <p className={dawnStyles}>
          On November 24, India was reported to have [J: attacked E Pak from 3
          directions] and opened another war front at Hilli in Dinajpur
          District. Two enemy tanks were obliterated and India faced heavy
          casualties.
          <span className={jangStyles}>
            130 Indian soldiers were killed, 18 tanks destroyed, while 7
            Pakistanis were martyred.
          </span>
          Indian thrusts on all five major fronts- Jessore, Benapole, Hilli,
          Sylhet and Chittagong- were reported to have been halted. Later,
          Pakistan was reported to have recaptured the Naupara border outpost,
          that India had captured under intensive artillery fighting. The
          Indians however made a fresh attack in the Hills area, from where they
          had been entirely driven out.
          <span className={jangStyles}>
            Reports came of Indian soldiers on the border of E Pak forcing
            themselves criminally on the local women and the refugees. Saudi
            Arabia gifts Pakistan 75 war planes.
          </span>
        </p>
        <p className={dawnStyles}>
          <span className={jangStyles}>
            On 25 Nov, a whole battalion of the enemy was destroyed in the
            Comilla sector, 2 enemy planes were also destroyed near Jessore. 197
            Indians were killed, 500+ injured. Jessore airport was bombed using
            Russian tanks. Calls for the declaration of jihad.
          </span>
        </p>
        <p className={dawnStyles}>
          On November 26, Sylhet observed complete hartal as a protest against
          the unprovoked Indian attack on Pakistan. A huge procession of 50,000
          people paraded through the streets, chanting slogans such of Pakistan
          Zindabad.
          <span className={jangStyles}>
            It was reported that the enemy had been pushed away from Sylhet. 300
            Indians killed and injured in Zakiganj and Atgram while the
            Pakistani army strengthened positions in Binapur and Chaatgaam.
          </span>
        </p>
        <p className={dawnStyles}>
          On November 27, Pakistan troops were reported to have repelled 5
          Indian battalion-size attacks in Jessore, Comilla, and Nokhali
          Districts. 1000 deaths were reported in a span of six days,
          <span className={jangStyles}>
            300 alone on the 27th. The US foreign minister says that both Pak
            and India should remove their forces from the border. There were
            demands that in order to stop Indian aggression, it should be
            attacked from W Pak.
          </span>
        </p>
        <p className={dawnStyles}>
          On November 28, India launched fresh large-scale offensive against
          Pakistan using three armored regiments, two divisions, and several
          artillery units. The Army was also reportedly being supported by the
          Indian Air Force.
          <span className={jangStyles}>
            There was danger of an Indian attack on W Pak.
          </span>
        </p>
        <p className={dawnStyles}>
          Delhi’s involvement in East Wing was also reported to have been
          featured in headlines around the world. On November 29, Yahya Khan
          communicated with the U.N Secretary-General U Thant, inviting his
          attention to the rapidly deteriorating East Pakistan crisis, and asked
          for the stationing of U.N observers.
          <span className={jangStyles}>
            Indira says that India will not accept any pressure from either the
            big nations or the UN. Nixon says that the US will intervene to stop
            an Indo-Pak clash. India has prepared an attack on Sindh border.
          </span>
        </p>
      </div>
    </FadeRR>
  );
}

export default November;
