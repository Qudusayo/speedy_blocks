import React, { Component } from "react";
import { Link } from "react-router-dom";

import styles from "./style.module.scss";

// logos
import ETH from "./../../assets/ETH.svg";
import BNB from "./../../assets/BNB.svg";
import MATIC from "./../../assets/MATIC.svg";

class index extends Component {
  render() {
    return (
      <div className={styles.homepage}>
        <h1>SPEEDY BLOCKS</h1>
        <div className={styles.flex}>
          <Link to="/blocks/BNB">
            <div className={styles.flexContent}>
              <img src={BNB} alt="BNB Logo" />
              <h2>Binance</h2>
            </div>
          </Link>
          <Link to="/blocks/ETH">
            <div className={styles.flexContent}>
              <img src={ETH} alt="Ether Logo" />
              <h2>Ethereum</h2>
            </div>
          </Link>
          <Link to="/blocks/MATIC">
            <div className={styles.flexContent}>
              <img src={MATIC} alt="Polygon Logo" />
              <h2>Polygon</h2>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default index;
