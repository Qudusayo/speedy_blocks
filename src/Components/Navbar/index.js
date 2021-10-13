import { Link } from "react-router-dom";

// logos
import ETH from "./../../assets/ETH.svg";
import BNB from "./../../assets/BNB.svg";
import MATIC from "./../../assets/MATIC.svg";

import styles from "./style.module.scss";

function index({ title }) {
  const returnSrc = (crypto) => {
    switch (crypto) {
      case "BNB":
        return BNB;
      case "ETH":
        return ETH;
      case "MATIC":
        return MATIC;

      default:
        return null;
    }
  };

  return (
    <nav className={styles.nav}>
      <h2>
        <Link to="/">SPEEDY BLOCKS</Link>
      </h2>
      <img src={returnSrc(title)} alt={title} />
    </nav>
  );
}

export default index;
