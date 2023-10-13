import {Connection, clusterApiUrl} from '@solana/web3.js';

let connection: Connection;
const createConnection = () => {
  if (connection) {
    return connection;
  }
  return (connection = new Connection(clusterApiUrl('testnet')));
};

export default createConnection;
