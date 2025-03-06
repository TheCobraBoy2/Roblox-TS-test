// Timer.d.ts
declare module "Timer" {
	type CallbackFn = () => void;
	type TimeFn = () => number;

	interface Timer {
		/**
		 * The interval at which the `Tick` event fires.
		 */
		Interval: number;

		/**
		 * The signal which updates the timer internally.
		 */
		UpdateSignal: RBXScriptSignal;

		/**
		 * The function which gets the current time.
		 */
		TimeFunction: TimeFn;

		/**
		 * Flag which indicates if the timer is allowed to drift.
		 * This flag must be set before calling `Start` or `StartNow`.
		 */
		AllowDrift: boolean;

		/**
		 * The event which is fired every time the timer hits its interval.
		 */
		Tick: RBXScriptSignal;

		/**
		 * Creates a new timer.
		 * @param interval The interval at which the timer fires.
		 * @returns A new Timer instance.
		 */
		Create(interval: number): Timer;

		/**
		 * Creates a simplified timer that fires a callback function at the given interval.
		 * @param interval The interval for the timer.
		 * @param callback The callback function to be executed.
		 * @param startNow If true, the callback will be triggered immediately.
		 * @param updateSignal The signal to track time updates (optional).
		 * @param timeFn The function to get the current time (optional).
		 * @returns An RBXScriptConnection to the timer.
		 */
		Simple(
			interval: number,
			callback: CallbackFn,
			startNow?: boolean,
			updateSignal?: RBXScriptSignal,
			timeFn?: TimeFn,
		): RBXScriptConnection;

		/**
		 * Returns true if the given object is a Timer.
		 * @param obj The object to check.
		 * @returns Whether the object is a Timer.
		 */
		Is(obj: unknown): boolean;

		/**
		 * Starts the timer. Will do nothing if the timer is already running.
		 */
		Start(): void;

		/**
		 * Starts the timer and fires the `Tick` event immediately.
		 * Will do nothing if the timer is already running.
		 */
		StartNow(): void;

		/**
		 * Stops the timer. Will do nothing if the timer is already stopped.
		 */
		Stop(): void;

		/**
		 * Returns true if the timer is currently running.
		 * @returns Whether the timer is running.
		 */
		IsRunning(): boolean;

		/**
		 * Destroys the timer, stopping it in the process.
		 */
		Destroy(): void;
	}

	export = Timer;
}
