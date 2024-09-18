import { create } from "zustand";
import { Cryptocurrency } from "../types";
import { devtools } from "zustand/middleware";
import { getCriptos } from "../services/CryptoServices";

type CryptoStore = {
      cryptocurrencies: Cryptocurrency[],
      fetchCrypto: () => Promise<void>
}


export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
      cryptocurrencies: [],
      fetchCrypto: async () => {
            const cryptocurrencies = await getCriptos();
            //console.log(criptocurrencies);

            set(() => ({
                  cryptocurrencies
            }))
      }
})))