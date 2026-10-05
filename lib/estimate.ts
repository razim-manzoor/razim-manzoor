export function estimateAutomation(input: {
  weeklyHours: number;
  hourlyValue: number;
  automationPercent: number;
  upfrontCost: number;
  monthlyRunningCost: number;
}) {
  const annualHours = input.weeklyHours * 52 * input.automationPercent / 100;
  const annualTimeValue = annualHours * input.hourlyValue;
  const annualNetValue = annualTimeValue - input.monthlyRunningCost * 12;
  const paybackMonths = annualNetValue > 0 ? input.upfrontCost / (annualNetValue / 12) : null;
  return { annualHours, annualTimeValue, annualNetValue, paybackMonths };
}
