// DataValidator.d.ts
declare module "DataValidator" {
	interface DataValidator {
		/**
		 * The input value to validate.
		 */
		input: unknown;

		/**
		 * Checks if the input value is NaN.
		 * @returns `true` if the input value is NaN, otherwise `false`.
		 */
		isNaN(): boolean;

		/**
		 * Checks if the input value is Infinity.
		 * @returns `true` if the input value is Infinity, otherwise `false`.
		 */
		isInfinity(): boolean;

		/**
		 * Checks if the input value is a number.
		 * @returns `true` if the input value is a number, otherwise `false`.
		 */
		isNumber(): boolean;

		/**
		 * Checks if the input value is a string.
		 * @returns `true` if the input value is a string, otherwise `false`.
		 */
		isString(): boolean;

		/**
		 * Checks if the input value is a function.
		 * @returns `true` if the input value is a function, otherwise `false`.
		 */
		isFunction(): boolean;

		/**
		 * Checks if the input value is an instance of an object.
		 * @returns `true` if the input value is an instance, otherwise `false`.
		 */
		isInstance(): boolean;

		/**
		 * Checks if the input value is within a given range.
		 * @param min The minimum value.
		 * @param max The maximum value.
		 * @returns `true` if the input value is within the range, otherwise `false`.
		 */
		isInRange(min: number, max: number): boolean;

		/**
		 * Checks if the input value is a non-empty string.
		 * @returns `true` if the input value is a non-empty string, otherwise `false`.
		 */
		isNonEmptyString(): boolean;

		/**
		 * Checks if the input value is a valid table (non-empty).
		 * @returns `true` if the input value is a valid table, otherwise `false`.
		 */
		isValidTable(): boolean;

		/**
		 * Checks if the input value is a boolean.
		 * @returns `true` if the input value is a boolean, otherwise `false`.
		 */
		isBoolean(): boolean;

		/**
		 * Checks if the input value matches a given pattern.
		 * @param pattern The pattern to match.
		 * @returns `true` if the input value matches the pattern, otherwise `false`.
		 */
		matchesPattern(pattern: string): boolean;

		/**
		 * Checks if the input value is truthy.
		 * @returns `true` if the input value is truthy, otherwise `false`.
		 */
		isTruthy(): boolean;

		/**
		 * Checks if the input value is falsy.
		 * @returns `true` if the input value is falsy, otherwise `false`.
		 */
		isFalsy(): boolean;

		/**
		 * Checks if the input value is a positive number.
		 * @returns `true` if the input value is a positive number, otherwise `false`.
		 */
		isPositiveNumber(): boolean;

		/**
		 * Checks if the input value is a negative number.
		 * @returns `true` if the input value is a negative number, otherwise `false`.
		 */
		isNegativeNumber(): boolean;

		/**
		 * Checks if the input value is an integer.
		 * @returns `true` if the input value is an integer, otherwise `false`.
		 */
		isInteger(): boolean;

		/**
		 * Checks if the input value is a descendant of the given ancestor.
		 * @param ancestor The ancestor instance to check.
		 * @returns `true` if the input value is a descendant of the ancestor, otherwise `false`.
		 */
		isDescendantOf(ancestor: Instance): boolean;
	}

	/**
	 * Creates a new DataValidator instance.
	 * @param input The value to validate.
	 * @returns A new DataValidator instance.
	 */
	export function create(input: unknown): DataValidator;

	/**
	 * Checks if the given value is NaN.
	 * @param value The value to check.
	 * @returns `true` if the value is NaN, otherwise `false`.
	 */
	export function isValueNaN(value: unknown): boolean;

	/**
	 * Checks if the given value is Infinity.
	 * @param value The value to check.
	 * @returns `true` if the value is Infinity, otherwise `false`.
	 */
	export function isValueInfinity(value: unknown): boolean;

	/**
	 * Checks if the given value is a number.
	 * @param value The value to check.
	 * @returns `true` if the value is a number, otherwise `false`.
	 */
	export function isValueNumber(value: unknown): boolean;

	/**
	 * Checks if the given value is a string.
	 * @param value The value to check.
	 * @returns `true` if the value is a string, otherwise `false`.
	 */
	export function isValueString(value: unknown): boolean;

	/**
	 * Checks if the given value is a function.
	 * @param value The value to check.
	 * @returns `true` if the value is a function, otherwise `false`.
	 */
	export function isValueFunction(value: unknown): boolean;

	/**
	 * Checks if the given value is an instance.
	 * @param value The value to check.
	 * @returns `true` if the value is an instance, otherwise `false`.
	 */
	export function isValueInstance(value: unknown): boolean;

	/**
	 * Checks if the given value is within a given range.
	 * @param value The value to check.
	 * @param min The minimum value.
	 * @param max The maximum value.
	 * @returns `true` if the value is within the range, otherwise `false`.
	 */
	export function isValueInRange(value: number, min: number, max: number): boolean;

	/**
	 * Checks if the given value is a non-empty string.
	 * @param value The value to check.
	 * @returns `true` if the value is a non-empty string, otherwise `false`.
	 */
	export function isValueNonEmptyString(value: string): boolean;

	/**
	 * Checks if the given value is a valid table.
	 * @param value The value to check.
	 * @returns `true` if the value is a valid table, otherwise `false`.
	 */
	export function isValueValidTable(value: object): boolean;

	/**
	 * Checks if the given value is a boolean.
	 * @param value The value to check.
	 * @returns `true` if the value is a boolean, otherwise `false`.
	 */
	export function isValueBoolean(value: unknown): boolean;

	/**
	 * Checks if the given value matches a pattern.
	 * @param value The value to check.
	 * @param pattern The pattern to match.
	 * @returns `true` if the value matches the pattern, otherwise `false`.
	 */
	export function valueMatchesPattern(value: string, pattern: string): boolean;

	/**
	 * Checks if the given value is truthy.
	 * @param value The value to check.
	 * @returns `true` if the value is truthy, otherwise `false`.
	 */
	export function isValueTruthy(value: unknown): boolean;

	/**
	 * Checks if the given value is falsy.
	 * @param value The value to check.
	 * @returns `true` if the value is falsy, otherwise `false`.
	 */
	export function isValueFalsy(value: unknown): boolean;

	/**
	 * Checks if the given value is a positive number.
	 * @param value The value to check.
	 * @returns `true` if the value is a positive number, otherwise `false`.
	 */
	export function isValuePositiveNumber(value: number): boolean;

	/**
	 * Checks if the given value is a negative number.
	 * @param value The value to check.
	 * @returns `true` if the value is a negative number, otherwise `false`.
	 */
	export function isValueNegativeNumber(value: number): boolean;

	/**
	 * Checks if the given value is an integer.
	 * @param value The value to check.
	 * @returns `true` if the value is an integer, otherwise `false`.
	 */
	export function isValueInteger(value: number): boolean;

	/**
	 * Checks if the given value is a descendant of the given ancestor.
	 * @param value The value to check.
	 * @param ancestor The ancestor instance to check.
	 * @returns `true` if the value is a descendant of the ancestor, otherwise `false`.
	 */
	export function isValueDescendantOf(value: Instance, ancestor: Instance): boolean;
}
