import { create } from "zustand";
import { Cryptocurrency, CryptoPrice, Pair } from "../types";
import { devtools } from "zustand/middleware";
import { fetchCurrentCryptoPrice, getCriptos } from "../services/CryptoServices";

type CryptoStore = {
      cryptocurrencies: Cryptocurrency[],
      result: CryptoPrice,
      fetchCrypto: () => Promise<void>,
      fetchData: (pair: Pair) => Promise<void>
}

export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
      cryptocurrencies: [],
      result: {
            IMAGEURL: '',
            PRICE: '',
            HIGHDAY: '',
            LOWDAY: '',
            CHANGEPCT24HOUR: '',
            LASTUPDATE: ''
      },

      fetchCrypto: async () => {
            const cryptocurrencies = await getCriptos();
            //console.log(criptocurrencies);

            set(() => ({
                  cryptocurrencies
            }))
      },

      fetchData: async (pair) => {
            const result = await fetchCurrentCryptoPrice(pair);
            // console.log(result);
            set(() => ({
                  result
            }))
      }
})))