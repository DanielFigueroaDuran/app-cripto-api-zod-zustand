import { useMemo } from "react";
import { useCryptoStore } from "../store/store"

const CryptoPriceDisplay = () => {

      const { result } = useCryptoStore();
      const hasResult = useMemo(() => !Object.values(result).includes(''), [result]);
      //console.log(result);

      return (
            <div>
                  {
                        hasResult && (
                              <>
                                    <h2>Cotización</h2>
                                    <div className="result">
                                          <div className="">
                                                <p>El precio es de: <span>{result.PRICE}</span></p>
                                          </div>
                                    </div>
                              </>
                        )
                  }

            </div>
      )
}

export default CryptoPriceDisplay