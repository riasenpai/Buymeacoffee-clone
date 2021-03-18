import React from "react";
import styles from "./Profile.module.css";
import julie from '../../assests/julie.webp';
import one from '../../assests/one.png';
import two from '../../assests/2.png';
import three from '../../assests/3.png';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }
  calcVal(value){
    var val= value;
    alert(val);

  }
  render() {
    return (
      <div>
        <div className={styles.generalHeading}>
          Show Support to your favourite streamer by donating below!
        </div>
        <div className={styles.introText}>
          Buy Me a Coffee makes supporting fun and easy. In just a couple of
          taps, you can make the payment (buy you a coffee) and leave a message
          for your favourite influencer. You don’t even have to create an
          account. You can accept a monthly or yearly membership and get a sneak
          peek at your streamer's exclusive content! 
        </div>
        <img className={styles.julieCon} src={julie} />
        
        <div className={styles.con1} >
          <div className={styles.imgAlign}>
            <div className={styles.coffee}>☕</div>
            <div className={styles.coffee}>X</div>
          <img className={styles.imgSize} onClick={() => this.calcVal(1)}  src={one}></img>
          <img className={styles.imgSize} onClick={() => this.calcVal(2)}  src={two}></img>
          <img className={styles.imgSize} onClick={() => this.calcVal(3)}  src={three}></img>
          </div>
        <input className={styles.textIn}></input>
        <button className={styles.button}><span>Support  </span></button>
        
        </div>
      </div>
    );
  }
}
export default Profile;
