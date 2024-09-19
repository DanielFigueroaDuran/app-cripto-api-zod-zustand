import { z } from "zod"
import { CryptoPriceShema, CrytoCurrencyResponseShema, CurrencySchema, PairSchema } from "../shema/cripto-shema"

export type Currency = z.infer<typeof CurrencySchema>

export type Cryptocurrency = z.infer<typeof CrytoCurrencyResponseShema>
export type Pair = z.infer<typeof PairSchema>
export type CryptoPrice = z.infer<typeof CryptoPriceShema>
