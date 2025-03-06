// ShardMath.d.ts
declare module "ShardMath" {
	/**
	 * Represents a ShardMath object that can format numbers with suffixes or full names.
	 */
	interface ShardMath {
		/**
		 * The number to format.
		 */
		number: number;

		/**
		 * The number of decimal places to use in formatting.
		 */
		decimalPlaces: number;

		/**
		 * Formats the number with a suffix (e.g., 1M for 1,000,000).
		 * @returns A string representing the number with a suffix.
		 */
		formatWithSuffix(): string;

		/**
		 * Formats the number with a full name (e.g., 1 Million for 1,000,000).
		 * @returns A string representing the number with a full name.
		 */
		formatWithFullName(): string;
	}

	/**
	 * Creates a new ShardMath instance.
	 * @param number The number to format.
	 * @param decimalPlaces The number of decimal places to use (optional).
	 * @returns A new ShardMath instance.
	 */
	export function createShardMath(number: number, decimalPlaces?: number): ShardMath;

	/**
	 * Formats a number with a suffix (e.g., 1M for 1,000,000).
	 * @param number The number to format.
	 * @param decimalPlaces The number of decimal places to use (optional).
	 * @returns A string representing the number with a suffix.
	 */
	export function formatNumberWithSuffix(number: number, decimalPlaces?: number): string;

	/**
	 * Formats a number with a full name (e.g., 1 Million for 1,000,000).
	 * @param number The number to format.
	 * @param decimalPlaces The number of decimal places to use (optional).
	 * @returns A string representing the number with a full name.
	 */
	export function formatNumberWithFullName(number: number, decimalPlaces?: number): string;
}
