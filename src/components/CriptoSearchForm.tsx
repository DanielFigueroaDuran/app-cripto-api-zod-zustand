import { ChangeEvent, FormEvent, useState } from "react";
import { currencies } from "../data"
import { useCryptoStore } from "../store/store"
import { Pair } from "../types";
import ErrorMessage from "./ErrorMessage";

const CriptoSearchForm = () => {
      const { cryptocurrencies } = useCryptoStore();
      const [pair, setPair] = useState<Pair>({
            currency: '',
            criptocurrency: ''

      });

      const [error, setError] = useState('');

      const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
            setPair({
                  ...pair,
                  [event.target.name]: event.target.value
            });
      }

      //console.log(pair);
      //console.log(cryptocurrencies);

      const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();

            if (Object.values(pair).includes('')) {
                  setError('Todos los campos son obligatorios');
                  return
            }

            setError('');
      }

      return (
            <form
                  className="form"
                  onSubmit={handleSubmit}
            >
                  {error && <ErrorMessage>{error}</ErrorMessage>}
                  <div className="field">
                        <label htmlFor="currency">Moneda</label>
                        <select
                              name="currency"
                              id="currency"
                              value={pair.currency}
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
                              value={pair.criptocurrency}
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