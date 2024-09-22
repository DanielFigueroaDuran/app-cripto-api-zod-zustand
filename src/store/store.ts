import { create } from "zustand";
import { Cryptocurrency, CryptoPrice, Pair } from "../types";
import { devtools } from "zustand/middleware";
import { fetchCurrentCryptoPrice, getCriptos } from "../services/CryptoServices";

type CryptoStore = {
      cryptocurrencies: Cryptocurrency[],
      loading: boolean,
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

      loading: false,

      fetchCrypto: async () => {
            const cryptocurrencies = await getCriptos();
            //console.log(criptocurrencies);

            set(() => ({
                  cryptocurrencies
            }))
      },

      fetchData: async (pair) => {

            set(() => ({
                  loading: true
            }));

            const result = await fetchCurrentCryptoPrice(pair);
            // console.log(result);

            set(() => ({
                  result,
                  loading: false
            }));
      }
})));