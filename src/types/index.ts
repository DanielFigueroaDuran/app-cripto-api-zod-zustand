import { z } from "zod"
import { CrytoCurrencyResponseShema, CurrencySchema, PairSchema } from "../shema/cripto-shema"

export type Currency = z.infer<typeof CurrencySchema>

export type Cryptocurrency = z.infer<typeof CrytoCurrencyResponseShema>
export type Pair = z.infer<typeof PairSchema>
