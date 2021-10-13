import styles from "./style.module.scss";

function index({ blockNumber, validator, transactionCount, transactionTime, crypto }) {
  return (
    <div className={styles.Block}>
      <div>{blockNumber}</div>
      <div>
        Validated By {validator.slice(0,23)}...
        <br /> {transactionCount} txns in {transactionTime} secs
      </div>
      <div>{crypto}</div>
    </div>
  );
}

export default index;
