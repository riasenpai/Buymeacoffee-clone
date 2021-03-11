import React, { Component } from "react";
import styles from "./Landing.module.css";
import top from "../../assests/top.webp";
import support from "../../assests/support.webp";
import dash from "../../assests/dash.webp";
import pewds from "../../assests/pewdiepie.jpg";
import valk from "../../assests/rae.jpg";
import toast from "../../assests/toast.jpg";
import jade from "../../assests/quat.jpg";
import { Link } from "react-router-dom";

class Landing extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.maincon}>
        <div className={styles.topBar}>
          <img className={styles.imageCon} src={top} />
          <div className={`${styles.signup} small-btn black-text small-text`}>
            Sign Up
          </div>
        </div>
        <div className={styles.con1}>
          <div
            className={`${styles.intro1} black-text base-text `}
            style={{ fontWeight: "480" }}
          >
            Buy Me a Coffee is a simple, meaningful way to fund your creative
            work. Without stitching together a bunch of apps like Patreon,
            Mailchimp, and a donate button — you can accept support,
            memberships, and build a direct relationship with your fans. Your
            fans are going to love it.
          </div>
          <img className={styles.supportCon} src={support} />
        </div>

        <img className={styles.intro2} src={dash} />
        <div className={styles.generalHeading}>
          Support your favourite streamer!
        </div>
        <Link to="/profile">
        <div className={styles.container}>
          <div className={styles.card}>
            <div className={styles.imgBox}>
              <img src={pewds}></img>
            </div>
            <div className={styles.content}>
              <h2>Pewdiepie</h2>
              <p>
                Felix Arvid Ulf Kjellberg, known online as PewDiePie, is a
                Swedish YouTuber, gamer and comedian, known primarily for his
                Let's Play videos and comedic formatted shows.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.imgBox}> 
              <img src={valk}></img>
            </div>
            <div className={styles.content}>
              <h2>Valkyrae</h2>
              <p>
                Rachel Hofstetter, better known by her online alias Valkyrae, is
                an American internet personality. The recipient of a Game Award,
                she is best known for her livestreams on YouTube, being one of
                the most viewed streamers on the platform.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.imgBox}>
              <img src={toast}></img>
            </div>
            <div className={styles.content}>
              <h2>Disguised Toast</h2>
              <p>
                Jeremy Wang, better known by the alias Disguised Toast, is a
                Taiwanese-Canadian streamer, YouTuber, and Internet personality.
                He got his start on YouTube, creating videos about the digital
                card game Hearthstone.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.imgBox}>
              <img src={jade}></img>
            </div>
            <div className={styles.content}>
              <h2>QuaterJade</h2>
              <p>
                Social media star who has gained fame for her QuarterJade Twitch
                channel. She has risen to massive popularity for her original
                vlogging alongside gaming playthroughs and live streaming,
                including for PlayerUnknown's Battlegrounds.
              </p>
            </div>
          </div>
        </div>
        </Link>
        <div className={styles.generalHeading}>
            
        </div>
      </div>
    );
  }
}
export default Landing;
