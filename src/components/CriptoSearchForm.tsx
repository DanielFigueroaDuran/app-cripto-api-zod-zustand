import { ChangeEvent, useState } from "react";
import { currencies } from "../data"
import { useCryptoStore } from "../store/store"
import { Pair } from "../types";

const CriptoSearchForm = () => {
      const { cryptocurrencies } = useCryptoStore();
      const [pair, setPair] = useState<Pair>({
            currency: '',
            criptocurrency: ''

      });

      const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
            setPair({
                  ...pair,
                  [event.target.name]: event.target.value
            });
      }

      //console.log(pair);
      //console.log(cryptocurrencies);

      return (
            <form className="form">
                  <div className="field">
                        <label htmlFor="currency">Moneda</label>
                        <select
                              name="currency"
                              id="currency"
                              onChange={handleChange}
                        >

                              <option value="">-- Seleccione --</option>
                              {currencies.map(currency => (
                                    <option
                                          key={currency.code}
                                          value={currency.code}
                                    >
                                          {currency.name}
                                    </option>
                              ))}
                        </select>
                  </div>
                  <div className="field">
                        <label htmlFor="criptocurrency">Criptomoneda:</label>
                        <select
                              name="criptocurrency"
                              id="criptocurrency"
                              onChange={handleChange}
                        >
                              <option value="">-- Seleccione --</option>
                              {cryptocurrencies.map(crypto => (
                                    <option
                                          key={crypto.CoinInfo.FullName}
                                          value={crypto.CoinInfo.Name}
                                    >
                                          {crypto.CoinInfo.FullName}
                                    </option>
                              ))}
                        </select>
                  </div>
                  <input type="submit" value="Cotizar" />
            </form>
      )
}

export default CriptoSearchForm