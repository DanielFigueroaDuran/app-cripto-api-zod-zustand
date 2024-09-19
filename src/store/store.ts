import { create } from "zustand";
import { Cryptocurrency, Pair } from "../types";
import { devtools } from "zustand/middleware";
import { fetchCurrentCryptoPrice, getCriptos } from "../services/CryptoServices";

type CryptoStore = {
      cryptocurrencies: Cryptocurrency[],
      fetchCrypto: () => Promise<void>,
      fetchData: (pair: Pair) => Promise<void>
}

export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
      cryptocurrencies: [],
      fetchCrypto: async () => {
            const cryptocurrencies = await getCriptos();
            //console.log(criptocurrencies);

            set(() => ({
                  cryptocurrencies
            }))
      },

      fetchData: async (pair) => {
            fetchCurrentCryptoPrice(pair);
      }
})))