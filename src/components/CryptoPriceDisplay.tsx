import { useMemo } from "react";
import { useCryptoStore } from "../store/store"

const CryptoPriceDisplay = () => {

      const { result } = useCryptoStore();
      const hasResult = useMemo(() => !Object.values(result).includes(''), [result]);
      // console.log(result.IMAGEURL);

      return (
            <div className="result-wrapper">
                  {
                        hasResult && (
                              <>
                                    <h2>Cotización</h2>
                                    <div className="result">
                                          <img src={`https://cryptocompare.com/${result.IMAGEURL}`} alt="image cryptomoneda" />
                                          <div className="">
                                                <p>El precio es de: <span>{result.PRICE}</span></p>
                                                <p>Precio mas alto del dia : <span>{result.HIGHDAY}</span></p>
                                                <p>Precio mas bajo del dia: <span>{result.LOWDAY}</span></p>
                                                <p>Variación últimas 24 horas: <span>{result.CHANGEPCT24HOUR}</span></p>
                                                <p>Última actualización: <span>{result.LASTUPDATE}</span></p>
                                          </div>
                                    </div>
                              </>
                        )
                  }

            </div>
      )
}

export default CryptoPriceDisplay