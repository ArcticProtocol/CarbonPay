import {PublicKey} from '@solana/web3.js';
import {create} from 'zustand';

export const useStore = create<IStore>(set => ({
  seedText: '',
  privateKey: null,
  publicKey: null,
  setSeedText: (key: string) =>
    set({
      seedText: key,
    }),
  setPrivateKey: (key: Uint8Array) =>
    set({
      privateKey: key,
    }),
  setPublicKey: (key: PublicKey) =>
    set({
      publicKey: key,
    }),
}));

export type IStore = {
  seedText: string;
  privateKey: Uint8Array | null;
  publicKey: PublicKey | null;
  setPrivateKey: (key: Uint8Array) => void;
  setSeedText: (key: string) => void;
  setPublicKey: (key: PublicKey) => void;
};
