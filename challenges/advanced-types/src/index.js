/**
 * - Mix: Provide a type consistent with the result of `Object.assign(A, B)`
 * @template A first object type
 * @template B second object type
 *
 * @example
 *
 * type Example = Mix<
 *    { a: number; b: string },
 *    { a: string; c: number[] }
 * >;
 * // results in
 * {
 *    a: string; // second object wins in event of collision
 *    b: string;
 *    c: number;
 * }
 */
console.log(Object.assign({ a: 44, b: "hello" }, { a: "from second object", c: 99 }));
export {};
