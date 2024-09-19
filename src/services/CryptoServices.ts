import axios from "axios";
import { CrytoCurrenciesResponseShema } from "../shema/cripto-shema";
import { Pair } from "../types";

export const getCriptos = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
      const { data: { Data } } = await axios(url);
      const result = CrytoCurrenciesResponseShema.safeParse(Data);
      // console.log(result);
      if (result.success) {
            return result.data
      };
};

export const fetchCurrentCryptoPrice = async (pair: Pair) => {
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.criptocurrency}&tsyms=${pair.currency}`;
      const { data: { DISPLAY } } = await axios(url);
      console.log(DISPLAY[pair.criptocurrency][pair.currency]);
}