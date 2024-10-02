/**
 * @module
 * Loose types
 */

/**
 * @description Any value
 */
// deno-lint-ignore no-explicit-any
export type LooseType = any;

/**
 * @description Any array values
 */
export type LooseArray = LooseType[];

/**
 * @description Any object with properties
 * @param Must Must be an object with properties
 */
// deno-lint-ignore ban-types
export type LooseObject<Must extends Record<PropertyKey, LooseType> = {}> = Record<PropertyKey, LooseType> & Must;

/**
 * @description Any function
 * @param Args Arguments of the function
 * @param Ret Return type of the function
 */
export type LooseFunction<Args extends LooseType[] = LooseType[], Ret extends LooseType = LooseType> = (...args: Args) => Ret;

/**
 * @description Any primitive value
 */
export type LoosePrimitive = string | number | boolean | null | undefined;
