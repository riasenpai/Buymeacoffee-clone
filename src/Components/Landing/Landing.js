import React, { Component } from "react";
import styles from "./Landing.module.css";
import top from "../../assests/top.webp";
import support from '../../assests/support.webp';
import dash from '../../assests/dash.webp';
class Landing extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.maincon}>
        <div className={styles.topBar}>
          <img className={styles.imageCon} src={top} />
        </div>
        <div className={`${styles.intro1} black-text base-text `} style={{ fontWeight: "480" }}>
          Buy Me a Coffee is a simple, meaningful way to fund your creative
          work. Without stitching together a bunch of apps like Patreon,
          Mailchimp, and a donate button — you can accept support, memberships,
          and build a direct relationship with your fans. Your fans are going to
          love it.
          <img className={styles.supportCon} src={support}/>
        </div>
        
            <img className={styles.intro2} src={dash}/> 
        
      </div>
    );
  }
}
export default Landing;
