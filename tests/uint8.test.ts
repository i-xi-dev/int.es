import { assertStrictEquals } from "std/testing/asserts";
import { Uint8 } from "../mod.ts";

Deno.test("Uint8.isUint8(number)", () => {
  assertStrictEquals(Uint8.isUint8(-1), false);
  assertStrictEquals(Uint8.isUint8(-0), true);
  assertStrictEquals(Uint8.isUint8(0), true);
  assertStrictEquals(Uint8.isUint8(63), true);
  assertStrictEquals(Uint8.isUint8(64), true);
  assertStrictEquals(Uint8.isUint8(255), true);
  assertStrictEquals(Uint8.isUint8(256), false);
  assertStrictEquals(Uint8.isUint8(0.1), false);
});

Deno.test("Uint8.isUint8(any)", () => {
  assertStrictEquals(Uint8.isUint8("0"), false);
  assertStrictEquals(Uint8.isUint8("255"), false);
  assertStrictEquals(Uint8.isUint8(true), false);
  assertStrictEquals(Uint8.isUint8({}), false);
  assertStrictEquals(Uint8.isUint8([]), false);
  assertStrictEquals(Uint8.isUint8([0]), false);
  assertStrictEquals(Uint8.isUint8(undefined), false);
  assertStrictEquals(Uint8.isUint8(null), false);
});
