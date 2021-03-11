import React from "react";
import styles from "./Profile.module.css";
import julie from '../../assests/julie.webp';
class Profile extends React.Component {
  constructor(props) {
    super(props);
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
        
      </div>
    );
  }
}
export default Profile;
