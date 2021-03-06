import { assertStrictEquals } from "std/testing/asserts";
import { Uint6 } from "../mod.ts";

Deno.test("Uint6.isUint6(number)", () => {
  assertStrictEquals(Uint6.isUint6(-1), false);
  assertStrictEquals(Uint6.isUint6(-0), true);
  assertStrictEquals(Uint6.isUint6(0), true);
  assertStrictEquals(Uint6.isUint6(63), true);
  assertStrictEquals(Uint6.isUint6(64), false);
  assertStrictEquals(Uint6.isUint6(255), false);
  assertStrictEquals(Uint6.isUint6(256), false);
  assertStrictEquals(Uint6.isUint6(0.1), false);
});

Deno.test("Uint6.isUint6(any)", () => {
  assertStrictEquals(Uint6.isUint6("0"), false);
  assertStrictEquals(Uint6.isUint6("255"), false);
  assertStrictEquals(Uint6.isUint6(true), false);
  assertStrictEquals(Uint6.isUint6({}), false);
  assertStrictEquals(Uint6.isUint6([]), false);
  assertStrictEquals(Uint6.isUint6([0]), false);
  assertStrictEquals(Uint6.isUint6(undefined), false);
  assertStrictEquals(Uint6.isUint6(null), false);
});
