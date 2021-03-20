import React from "react";
import styles from "./Profile.module.css";
import julie from "../../assests/julie.webp";
import one from "../../assests/one.png";
import two from "../../assests/2.png";
import three from "../../assests/3.png";
import {getUrl,postData} from '../../http';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import  ReactRouter from "react-router";
import 'react-toastify/dist/ReactToastify.css';


class Profile extends React.Component {
  constructor(props) {
    super(props);
    
    this.coffeeCost = 5;
    this.state = {
      coffeeCount: 1,
      total: this.coffeeCost * 1,
      rzpayOptions: {
          key: "rzp_test_RsBwXgDFdkXgb6", // Enter the Key ID generated from the Dashboard
          amount: this.coffeeCost * 1, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
          currency: "USD",
          name: "Buymeacoffee",
          description: "Test Transaction",
          image:
            "https://cdn.buymeacoffee.com/assets/img/home-page-v3/bmc-new-logo.png",
          order_id: "order_9A33XWu170gUtm",
          handler: this.rzpayHandler,
          prefill: {
            name: "John Boy",
            email: "Johnnyjohn@gmail.com",
            contact: "9999999999"
          },
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: "#3399cc",
          }
      }
    };
  }
 
   
  componentDidMount () {
    const script = document.createElement("script");

    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = false;

    document.body.appendChild(script);
  }
  resetBorders = ()=>{
    const optionsIds = ["five","ten","fifteen"];
    optionsIds.forEach(id=>{
      document.getElementById(id).style.border = "none";
    })
  }
  calcVal(event,value) {
    this.resetBorders();
    event.target.style.border = "solid 3px";
    event.target.style.borderRadius = "50%";
    this.setState({ coffeeCount: value });
    if (value == 0) this.setState({ total: "" });
    this.setState({ total: value * this.coffeeCost });
    
  }
  rzpayHandler = (rzResponse)=>{
    setTimeout(()=>{
      window.location.href="/";
    },3000);
    toast.success('🦄 Thanks for the ☕!! ', {
      position: "top",
      autoClose: 3000,
      closeOnClick: true
    });
  }
  rzOpen(){
    const url = getUrl("order");
    const request = postData(url,{"amount": this.state.total});
    request.then((response)=>{
      console.log(response)
      const rzpayOptions = this.state.rzpayOptions;
      rzpayOptions.order_id = response.data["order_data"]["id"];
      this.setState(
        {
          rzpayOptions: rzpayOptions
        }
      )
      let rzp1 = new window.Razorpay(rzpayOptions);
      rzp1.open();
    }).catch((err)=>{
      console.log(err)
    });
  }

  render() {
    return (
      <div>
        <ToastContainer
          position="top"
          autoClose={3000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          />
          <ToastContainer />
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

        <div className={styles.con1}>
          <div className={styles.imgAlign}>
            <div className={styles.coffee}>☕</div>
            <div className={styles.coffee}>X</div>
            <img
              className={styles.imgSize} id="five"
              onClick={(event) => this.calcVal(event,1)}
              src={one}
            ></img>
            <img
              className={styles.imgSize} id="ten"
              onClick={(event) => this.calcVal(event,2)}
              src={two}
            ></img>
            <img
              className={styles.imgSize} id="fifteen"
              onClick={(event) => this.calcVal(event,3)}
              src={three}
            ></img>
          </div>
          <button className={styles.button} onClick={() => this.rzOpen()}>
            <span>Support (${this.state.total}) </span>
          </button>
        </div>
        
        
      </div>
    );
  }
}
export default Profile;
