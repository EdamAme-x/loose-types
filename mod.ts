/**
 * @module
 * Loose types
 */

// deno-lint-ignore no-explicit-any
export type LooseType = any;

export type LooseArray = LooseType[];

// deno-lint-ignore ban-types
export type LooseObject<Must extends Record<PropertyKey, LooseType> = {}> = Record<PropertyKey, LooseType> & Must;

export type LooseFunction = (...args: LooseType[]) => LooseType;
