import { assertStrictEquals } from "std/testing/asserts";
import { Integer } from "../src/int.ts";

Deno.test("Integer.isNonNegativeInteger(number)", () => {
  assertStrictEquals(Integer.isNonNegativeInteger(-1), false);
  assertStrictEquals(Integer.isNonNegativeInteger(-0), true);
  assertStrictEquals(Integer.isNonNegativeInteger(0), true);
  assertStrictEquals(Integer.isNonNegativeInteger(1), true);
  assertStrictEquals(
    Integer.isNonNegativeInteger(Number.MAX_SAFE_INTEGER),
    true,
  );
  assertStrictEquals(Integer.isNonNegativeInteger(1.1), false);
  assertStrictEquals(Integer.isNonNegativeInteger(Number.NaN), false);
  assertStrictEquals(
    Integer.isNonNegativeInteger(Number.POSITIVE_INFINITY),
    false,
  );
  assertStrictEquals(
    Integer.isNonNegativeInteger(Number.NEGATIVE_INFINITY),
    false,
  );
  assertStrictEquals(
    Integer.isNonNegativeInteger(Number.MIN_SAFE_INTEGER),
    false,
  );
});

Deno.test("Integer.isNonNegativeInteger(any)", () => {
  assertStrictEquals(Integer.isNonNegativeInteger("1"), false);
  assertStrictEquals(Integer.isNonNegativeInteger(true), false);
});

Deno.test("Integer.isPositiveInteger(number)", () => {
  assertStrictEquals(Integer.isPositiveInteger(-1), false);
  assertStrictEquals(Integer.isPositiveInteger(-0), false);
  assertStrictEquals(Integer.isPositiveInteger(0), false);
  assertStrictEquals(Integer.isPositiveInteger(1), true);
  assertStrictEquals(Integer.isPositiveInteger(Number.MAX_SAFE_INTEGER), true);
  assertStrictEquals(Integer.isNonNegativeInteger(1.1), false);
  assertStrictEquals(Integer.isNonNegativeInteger(Number.NaN), false);
  assertStrictEquals(
    Integer.isNonNegativeInteger(Number.POSITIVE_INFINITY),
    false,
  );
  assertStrictEquals(
    Integer.isNonNegativeInteger(Number.NEGATIVE_INFINITY),
    false,
  );
  assertStrictEquals(
    Integer.isNonNegativeInteger(Number.MIN_SAFE_INTEGER),
    false,
  );
});

Deno.test("Integer.isPositiveInteger(any)", () => {
  assertStrictEquals(Integer.isPositiveInteger("1"), false);
  assertStrictEquals(Integer.isPositiveInteger(true), false);
});
