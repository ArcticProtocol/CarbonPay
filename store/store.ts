import AsyncStorage from '@react-native-async-storage/async-storage';
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
  clearKeys: async () => {
    set({
      publicKey: null,
      privateKey: null,
      seedText: '',
    });
    await AsyncStorage.removeItem('@user_data');
  },
}));

export type IStore = {
  seedText: string;
  privateKey: Uint8Array | null;
  publicKey: PublicKey | null;
  setPrivateKey: (key: Uint8Array) => void;
  setSeedText: (key: string) => void;
  setPublicKey: (key: PublicKey) => void;
  clearKeys: () => void;
};
