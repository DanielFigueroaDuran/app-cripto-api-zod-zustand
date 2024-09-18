import { z } from "zod"
import { CrytoCurrencyResponseShema, CurrencySchema } from "../shema/cripto-shema"

export type Currency = z.infer<typeof CurrencySchema>

export type Cryptocurrency = z.infer<typeof CrytoCurrencyResponseShema>
