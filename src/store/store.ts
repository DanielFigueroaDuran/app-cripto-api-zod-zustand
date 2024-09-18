import axios from "axios";
import { create } from "zustand";
import { CrytoCurrenciesResponseShema } from "../shema/cripto-shema";

const getCriptos = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
      const { data: { Data } } = await axios(url);
      const result = CrytoCurrenciesResponseShema.safeParse(Data);
      console.log(result);
}

export const useCryptoStore = create(() => ({
      fetchCrypto: () => {
            getCriptos();
      }
}))