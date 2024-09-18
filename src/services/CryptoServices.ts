import axios from "axios";
import { CrytoCurrenciesResponseShema } from "../shema/cripto-shema";

export const getCriptos = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
      const { data: { Data } } = await axios(url);
      const result = CrytoCurrenciesResponseShema.safeParse(Data);
      // console.log(result);
      if (result.success) {
            return result.data
      };
}