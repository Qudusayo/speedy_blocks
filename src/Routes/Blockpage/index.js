import React, { Component } from "react";
import Web3 from "web3";

import Block from "./../../Components/Block";
import Navbar from "./../../Components/Navbar";
import TitleCard from "./../../Components/TitleCard";

import styles from "./style.module.scss";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blocks: [],
      crypto: "moralis",
    };
  }
  componentDidMount() {
    let crypto = this.props.match.params.crypto;
    this.loadBlocks(crypto);
    this.setState({ crypto });
  }

  loadBlocks(crypto) {
    const wssUri = {
      BNB: process.env.REACT_APP_BSC_WS,
      ETH: process.env.REACT_APP_ETH_WS,
      MATIC: process.env.REACT_APP_MATIC_WS,
    };

    const web3 = new Web3(new Web3.providers.WebsocketProvider(wssUri[crypto]));

    // BLOCK NUMBER
    web3.eth
      .subscribe("newBlockHeaders", function (error, result) {
        if (!error) {
          return;
        }

        console.error(error);
      })
      .on(
        "data",
        async function (blockHeader) {
          async function blockTime() {
            let curBlock = blockHeader.number;
            let prevBlock = curBlock - 1;
            let prevBlockInfo = await web3.eth.getBlock(prevBlock);
            let curBlockInfo = await web3.eth.getBlock(curBlock);
            let blockTimeGeneration =
              curBlockInfo.timestamp - prevBlockInfo.timestamp;
            return blockTimeGeneration;
          }

          let data = {};
          data.miner = blockHeader.miner;
          data.blockNumber = blockHeader.number;
          data.timestamp = blockHeader.timestamp;
          data.transactionCount = await web3.eth
            .getBlockTransactionCount(blockHeader.hash)
            .then((data) => data);

          data.blockTime = await blockTime();
          this.newBlock(data);
        }.bind(this)
      )
      .on("error", console.error);
  }

  newBlock(data) {
    this.setState((previousState) => ({
      blocks: [data, ...previousState.blocks.slice(0, 20)],
    }));
  }

  render() {
    return (
      <div className={styles.blockPage}>
        <Navbar title={this.state.crypto} />
        <TitleCard crypto={this.state.crypto} />
        <div className={styles.blockCard}>
          <h3>Latest Blocks</h3>
          {this.state.blocks
            ? this.state.blocks.map((block) => (
                <Block
                  key={block.blockNumber}
                  blockNumber={block.blockNumber}
                  validator={block.miner}
                  transactionCount={block.transactionCount}
                  transactionTime={block.blockTime}
                  crypto={this.state.crypto}
                />
              ))
            : null}
        </div>
      </div>
    );
  }
}

export default index;
