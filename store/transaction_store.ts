import {create} from 'zustand';
import {useStore} from './store';
import createConnection from '../util/createConnection';
import {
  Keypair,
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
  sendAndConfirmTransaction,
} from '@solana/web3.js';
const coinTicker = require('coin-ticker');

export const useTransactionStore = create<ITransactionStore>((set, get) => ({
  publicKey: useStore.getState().publicKey,
  solPriceUSD: 0,
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

    console.log(key!.toString().length);
  },

  fetchUsdBalance: async sol => {
    const response = await coinTicker('bitfinex', 'SOL_USD');
    set({
      balances: {sol: sol, usd: sol * response.last},
      solPriceUSD: response.last,
    });
  },

  fetchTransactionHistory: async () => {
    let signatures = await createConnection().getConfirmedSignaturesForAddress2(
      get().publicKey!,
    );

    const transactions = [];
    for (let i: number = 0; i < signatures.length; i++) {
      let tx = await createConnection().getTransaction(signatures[i].signature);
      transactions.push({...tx?.meta, blockTime: tx?.blockTime});
    }
    set({
      transactionHistory: transactions,
    });

    // console.log({transactions});
    // console.log(transactions[0].postBalances);
    // console.log(transactions[0].preBalances);
    // console.log(transactions.length);
  },

  sendTransaction: async ({toAddress, amount}: any) => {
    let offsetAddress = '';

    let tx = new Transaction();
    tx.add(
      SystemProgram.transfer({
        fromPubkey: get().publicKey!,
        toPubkey: toAddress,
        lamports: amount * LAMPORTS_PER_SOL,
      }),
    );
    let kp = Keypair.fromSecretKey(useStore.getState().privateKey!);
    let response = await sendAndConfirmTransaction(createConnection(), tx, [
      kp,
    ]);

    console.log({response});
  },
}));

export type ITransactionStore = {
  publicKey: PublicKey | null;
  solPriceUSD: number;
  balances: {
    sol: number;
    usd: number;
  };
  transactionHistory: any[];
  fetchBalance: () => void;
  fetchUsdBalance: (lamports: number) => void;
  fetchTransactionHistory: () => void;
  sendTransaction: ({
    toAddress,
    solAmount,
  }: {
    toAddress: string;
    solAmount: BigInt;
  }) => void;
};
