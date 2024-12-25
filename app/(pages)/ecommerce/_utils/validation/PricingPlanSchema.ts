import { z } from "zod";

import { Period } from "@/types";

const validPeriods: Period[] = ["monthly", "yearly"];
export const pricingPlanSchema = z.object({
  period: z.enum(validPeriods as [Period, ...Period[]]),
});

export type PricingPlan = z.infer<typeof pricingPlanSchema>;
