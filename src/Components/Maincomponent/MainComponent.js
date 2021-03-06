import React from 'react';
import styles from './MainComponent.module.css';
import Landing from './../Landing/Landing';

class MainComponent extends React.Component{
    constructor(props) {
        super(props);
      }
      render(){
        return(
             <div>
               <Landing></Landing>
             </div>
         );
      }
    }
    export default MainComponent;