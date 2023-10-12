import {create} from 'zustand';
import {useStore} from './store';
import createConnection from '../util/createConnection';
import {Keypair, PublicKey, Transaction, sendAndConfirmTransaction} from '@solana/web3.js';
const coinTicker = require('coin-ticker');

export const useTransactionStore = create<ITransactionStore>((set, get) => ({
  publicKey: useStore.getState().publicKey,
  balances: {
    sol: 0,
    usd: 0,
  },
  transactionHistory: [],

  fetchBalance: async () => {
    const key = get().publicKey;
    const lamports = await createConnection()
      .getBalance(key!)
      .catch(err => {
        console.error(`Error: ${err}`);
      });
    set({
      balances: {
        sol: lamports! / 1000000000,
        usd: 0,
      },
    });

    get().fetchUsdBalance(get().balances.sol);
  },

  fetchUsdBalance: async sol => {
    const response = await coinTicker('bitfinex', 'SOL_USD');
    set({balances: {sol: sol, usd: sol * response.last}});
  },

  fetchTransactionHistory: async () => {
    let signatures = await createConnection().getConfirmedSignaturesForAddress2(
      get().publicKey!,
    );

    const transactions = [];
    for (let i: number = 0; i < signatures.length; i++) {
      let tx = await createConnection().getTransaction(signatures[i].signature);
      transactions.push(tx?.meta);
    }

    console.log({transactions})
  },

  sendTransaction : async () => {
    let tx = new Transaction();
    tx.add()
    let kp = Keypair.fromSecretKey(useStore.getState().privateKey!);
    let response = await sendAndConfirmTransaction(createConnection(), tx, [kp])
  }
}));

export type ITransactionStore = {
  publicKey: PublicKey | null;
  balances: {
    sol: number;
    usd: number;
  };
  transactionHistory: any[];
  fetchBalance: () => void;
  fetchUsdBalance: (lamports: number) => void;
  fetchTransactionHistory: () => void;
};
