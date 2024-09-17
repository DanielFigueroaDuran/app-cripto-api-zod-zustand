import { z } from "zod"
import { CurrencySchema } from "../shema/cripto-shema"

export type Currency = z.infer<typeof CurrencySchema>
// code: string,
// name: string
