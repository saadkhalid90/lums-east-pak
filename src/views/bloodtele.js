import { useEffect } from 'react';
import styles from "./css-modules/view-styles.module.css";
import Navbar from "../components/Navbar.js";
import ChapterTitle from "../components/ChapterTitle.js";
import SectionHeading from "../components/SectionHeading.js";
import PhotoContainer from "../components/PhotoContainer.js";
import QuotePhoto from "../components/QuotePhoto.js";
import Footer from "../components/Footer.js";

import chapter4_1 from "../resources/Chapter4/Chapter4_1.jpg";
import chapter4_2 from "../resources/Chapter4/Chapter4_2.jpg";
import chapter4_3 from "../resources/Chapter4/Chapter4_3.jpg";

import blood from "../resources/Chapter4/blood.jpg";
import bloodTel from "../resources/Chapter4/blood telegram.jpg";
import bloodTelBook from "../resources/Chapter4/blood telegram book.jpg";

import NixKiss from "../resources/Chapter4/NixonKissinger.jpg";
import YahKiss from "../resources/Chapter4/yahyaKiss.jpg";

const imgArrCh4 = [
  {
    image: chapter4_1,
    style: {
      width: "25%",
    },
  },
  {
    image: chapter4_2,
    style: {
      width: "50%",
    },
  },
  {
    image: chapter4_3,
    style: {
      width: "25%",
    },
  },
];

function BloodTele() {
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <div className={styles.view_container}>
      <Navbar type="chapter_title" />
      <ChapterTitle
        number="4"
        imgArr={imgArrCh4}
        title="The Blood Telegram"
        subtitle="Nixon, Kissinger and Yahya"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
      />

      <section className={styles.content_section}>
        <div className={styles.view_content_wrapper}>
          <div className={styles.view_content_container}>
            <SectionHeading heading="Arthur Blood, American Consul General to Dhaka sends a telegram revealing the excesses of Pakistani Military" />
            <p className={styles.view_para}>
              Silences are often weapons of oppression. And if one document
              could provide quintessential testimony to this statement, it would
              be the Blood Telegram. Sent to Washington DC by the then American
              Consul General to Dhaka, Archer Blood, the telegram carries
              imminent warnings and indications of an undergoing genocide in
              East Pakistan. The response from DC was abysmal or as Blood
              writes:
            </p>
          </div>
        </div>
        <div className={styles.view_fw_content}>
          <QuotePhoto
            quote
            addedMargin
            photo={blood}
            photoClassName={"ch2Q_6points"}
            quoteTxt="Our government has failed to denounce the suppression of democracy. Our government has failed to denounce atrocities…… Our government has evidenced what many will consider moral bankruptcy"
            quoteAlign="center"
            color="white"
            fontSize="big"
            rotation="rotate2"
            quoterText={"Archer Blood | American Consul General to Dhaka 1971"}
            quotationMark={true}
          />
        </div>
      </section>

      <section className={styles.content_section}>
        <div className={styles.view_content_wrapper}>
          <div className={styles.view_content_container}>
            <PhotoContainer
              noScroll
              imgArr={[
                {
                  image: bloodTelBook,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "forty",
                },
                {
                  image: bloodTel,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "forty",
                },
              ]}
            />
            <p className={styles.view_para}>
              In 2013, Gary J. Bass, Assistant Professor of Politics and
              International Relations at Princeton authored The Blood Telegram:
              Nixon, Kissinger, and a Forgotten Genocide analyzing the American
              position on the Bangladesh LIberation war of 1971. There are
              numerous declassified conversations between Nixon, Kissinger, and
              other stakeholders. This chapter picks out important quotes from
              both the Telegram itself and the book. In the following quotes,
              you will witness everything from utilitarianism, to obsession to
              vested interests- everything barring a concern for human lives.
              Descriptions under each quote, if present, have been kept to a
              minimum so that the words and the silences they imply, speak for
              themselves.
            </p>
            <SectionHeading heading="Quotes from Blood Telegram" />
          </div>
        </div>
        <div className={styles.view_fw_content}>
          <QuotePhoto
            quote
            addedMargin
            photo={NixKiss}
            photoClassName={"ch2Q_6points"}
            quoteTxt={
              <ul>
                <li>
                  Nixon and Kissinger, always sympathetic to the Pakistani
                  junta, were not about to condemn it while it was making itself
                  so useful. So the Bengalis became collateral damage for
                  realigning the global balance of power
                </li>
                <li>
                  Kissinger once wrote, “Yahya is tough, direct, and with a good
                  sense of humor. He talks in a very clipped way, is a splendid
                  product of Sandhurst, and affects a sort of social naivete but
                  is probably much more complicated than this.”
                </li>
                <li>
                  Henry [Kissinger] is my least pathological pro-India lover
                  around here,” Nixon once said proudly
                </li>
                <li>
                  Kissinger, for all his brilliance, knew a lot more about
                  Metternich’s Austria than he did about modern South Asia. (He
                  once said, “I would not recognize Pushtoon agitation if it hit
                  me in the face.”)
                </li>
                <li>
                  He [Nixon] promised that “we will keep our word with Pakistan
                  however; we will work with you; we will try to be as helpful
                  as we can.” Yahya was grateful. He replied, “We appreciate
                  this; our friendship is not new. We were surrounded by enemies
                  when we became friends. We are no longer surrounded by enemies
                  but still, we remain friends. We are a sentimental people and
                  we will never do anything to embarrass you.”
                </li>
                <li>
                  So Nixon loathed him [Bhutto]: “the son-of-a-bitch is a total
                  demagogue.” (Kissinger, more cautiously, described him as
                  “Violently anti-Indian. Pro-Chinese.”)
                </li>
              </ul>
            }
            quoteAlign="left"
            color="white"
            fontSize="small"
            rotation="rotate2"
            quoterText={"Quotes from Blood Telegram by Gary J. Bass"}
            quotationMark={true}
          />
        </div>
      </section>
      <section className={styles.content_section}>
        <div className={styles.view_content_wrapper}>
          <div className={styles.view_content_container}>
            <SectionHeading heading="Quotes from Blood Telegram" />
            <p className={styles.view_para}>
              <ul>
                <li>
                  When a State Department official argued that the United States
                  should discourage Yahya from shooting, Kissinger dug in his
                  heels. “If I may be the devil’s advocate,” he asked, “why
                  should we say anything?” He asked warily, “What would we do to
                  discourage the use of force? Tell Yahya we don’t favor it?”
                  Kissinger said firmly, “Intervention would almost certainly be
                  self-defeating.”
                </li>
                <li>
                  He [Kissinger] invoked Nixon’s friendship with Yahya: “The
                  President will be very reluctant to do anything that Yahya
                  could interpret as a personal affront.”
                </li>
                <li>
                  Kissinger urged the president to do nothing. He wrote that the
                  U.S. government’s consensus—forged by him—was that “the best
                  posture was to remain inactive and do nothing that Yahya might
                  find objectionable. (A few days before March 25)”
                </li>
                <li>
                  Conferring with these U.S. officials, Kissinger appeared to
                  grasp the inevitability of an independent Bangladesh emerging
                  at the end of the civil war. But Kissinger took the opposite
                  line when he was speaking to the president alone. A day later,
                  he told him that “it looks at the moment as if Yahya has
                  gotten control.” Nixon was surprised: “Really? How?” Kissinger
                  told the president, “The Bengalis aren’t very good fighters I
                  guess.”
                </li>
                <li>
                  When Kissinger brought up the slaughter in East Pakistan,
                  Nixon refused to say anything against it: “I wouldn’t put out
                  a statement praising it, but we’re not going to condemn it
                  either.”
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className={styles.view_fw_content}>
          <QuotePhoto
            quote
            addedMargin
            photo={YahKiss}
            photoClassName={"ch2Q_6points"}
            quoteTxt={
              <ul>
                <li>
                  On March 29, Kissinger told Nixon, “Apparently Yahya has got
                  control of East Pakistan.” “Good,” said the president.
                  “There’re sometimes the use of power is …” Kissinger completed
                  the thought: “The use of power against seeming odds pays
                  off.”(
                </li>

                <li>
                  “The main thing to do is to keep cool and not do anything.
                  There’s nothing in it for us either way.” Nixon said, “What do
                  they think we are going to do but help the Indians?” Kissinger
                  agreed: “It would infuriate the West Pakistanis; it wouldn’t
                  gain anything with the East Pakistanis, who wouldn’t know
                  about it anyway and the Indians are not noted for their
                  gratitude.” (In response to Blood’s cables)
                </li>
                <li>
                  The president said that “we should just stay out—like in
                  Biafra, what the hell can we do?” (Neither of them noticed
                  that the United States was actually thoroughly involved,
                  taking Pakistan’s side.) “Good point,” Kissinger replied.
                  Nixon said, “I don’t like it, but I didn’t like shooting
                  starving Biafrans either.”
                </li>
                <li>
                  [W]e have chosen not to intervene, even morally, on the
                  grounds that the Awami conflict, in which unfortunately the
                  overworked term genocide is applicable, is purely [an]
                  internal matter of a sovereign state. Private Americans have
                  expressed disgust.” (Blood Telegram)
                </li>
                <li>
                  Kissinger to Nixon: “Mr. President, if we get in there now, we
                  get West Pakistan turned against us, and … the Bengalis are
                  going to go left anyway. They are by nature left.”
                </li>
              </ul>
            }
            quoteAlign="left"
            color="white"
            fontSize="small"
            rotation="rotate2"
            quoterText={"Quotes from Blood Telegram by Gary J. Bass"}
            quotationMark={true}
          />
        </div>
      </section>
      <section className={styles.content_section}>
        <div className={styles.view_content_wrapper}>
          <div className={styles.view_content_container}>
            <SectionHeading heading="Quotes from Blood Telegram" />
            <p className={styles.view_para}>
              <ul>
                <li>
                  “Rather than sticking up for his contrarians in Dacca and
                  Delhi, the secretary of state [William Rogers] tried to shut
                  them up”. Rogers told Kissinger, “We have Ken Keating [US
                  Ambassador to India who expressed criticism towards Nixon’s
                  silence over the genocide] quieted down. Kissinger replied, “I
                  appreciated that.”
                </li>
                <li>
                  Kissinger: “Now, State [Department] has a whole list of
                  needling, nasty little things they want to do to West
                  Pakistan. I don’t think we should do it, Mr. President.” Nixon
                  growled, “Not a goddamn thing. I will not allow it.”
                </li>
                <li>
                  Some military supply would keep going. When it was pointed out
                  that twenty-eight thousand rounds of ammunition and some bomb
                  parts were due in July, and that Congress might object,
                  Kissinger told a Situation Room meeting, “But we would pay a
                  very heavy price with Yahya if they were not delivered.”
                </li>
                <li>
                  In a Situation Room meeting, he [Kissinger] stood firm against
                  confronting Yahya: “no matter what our view may be of the
                  savagery of the West Pakistan troops, we would just be pulling
                  India’s chestnuts out of the fire if we take on West
                  Pakistan.”
                </li>
                <li>
                  Duly coached [by Kissinger], Nixon added his own commentary,
                  veering closer to the sucker option of total backing for
                  Pakistan. The president scrawled, “To all hands. Don’t squeeze
                  Yahya at this time.” He underlined the word “Don’t” three
                  times. (April 1971)
                </li>
              </ul>
            </p>
          </div>
        </div>
      </section>
      <Footer
        projectName="Bangladesh’s Liberation War"
        projectSubTitle="A visual history"
        projectDescription="The LUMS Digital Archive is a research repository that aims at collecting, cataloging and preserving rare material (books, pamphlets, newspapers and other items) of
      historical significance and making them available to researchers. In particular, the archive focuses on events, groups, movements and personalities relating to broader
      historical, political and cultural trends in South Asia, with an emphasis on preserving the accounts of marginalized and subaltern groups."
        prevLink="/ch2"
        nextLink="/ch3"
        chapterID={3}
      />
    </div>
  );
}

export default BloodTele;
