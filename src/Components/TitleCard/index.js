// logos
import styles from "./style.module.scss"

function index({ crypto }) {
  const returnTitle = (crypto) => {
    switch (crypto) {
      case "BNB":
        return "Binance Smart Chain";
      case "ETH":
        return "Ethereum";
      case "MATIC":
        return "Matic";

      default:
        return null;
    }
  };

  const style = {
    BNB: {
      backgroundColor: "#FBDA3C",
      color: "#000000"
    },
    ETH: {
      backgroundColor: "#000000",
      color: "#FFFFFF"
    },
    MATIC: {
      backgroundColor: "#8247E5",
      color: "#FFFFFF"
    }
  }
  
  return (
    <nav className={styles.titleCard} style={style[crypto]} >
      <h2>{returnTitle(crypto)} Blocks</h2>
    </nav>
  );
}

export default index;
