import {Connection, clusterApiUrl} from '@solana/web3.js';

const createConnection = () => {
  return new Connection(clusterApiUrl('devnet'));
};

export default createConnection;
