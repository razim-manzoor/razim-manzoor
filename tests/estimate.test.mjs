import assert from "node:assert/strict";
import test from "node:test";
import { createRequire } from "node:module";

const { estimateAutomation } = createRequire(import.meta.url)("../lib/estimate.ts");

const example = { weeklyHours: 10, hourlyValue: 100, automationPercent: 50, upfrontCost: 11800, monthlyRunningCost: 200 };

test("time released and running costs produce a six-month modeled payback", () => {
  assert.deepEqual(estimateAutomation(example), { annualHours: 260, annualTimeValue: 26000, annualNetValue: 23600, paybackMonths: 6 });
});

test("zero automation does not imply instant payback", () => {
  const result = estimateAutomation({ ...example, automationPercent: 0 });
  assert.equal(result.annualHours, 0);
  assert.equal(result.annualNetValue, -2400);
  assert.equal(result.paybackMonths, null);
});

test("running costs above time value produce no modeled payback", () => {
  const result = estimateAutomation({ ...example, monthlyRunningCost: 3000 });
  assert.equal(result.annualNetValue, -10000);
  assert.equal(result.paybackMonths, null);
});

test("zero time value and zero running costs produce no modeled payback", () => {
  const result = estimateAutomation({ ...example, hourlyValue: 0, monthlyRunningCost: 0 });
  assert.equal(result.annualNetValue, 0);
  assert.equal(result.paybackMonths, null);
});

test("a build with no upfront cost and positive net value has zero-month payback", () => {
  assert.equal(estimateAutomation({ ...example, upfrontCost: 0 }).paybackMonths, 0);
});
