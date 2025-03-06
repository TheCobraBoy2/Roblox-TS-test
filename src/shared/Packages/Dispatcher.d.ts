// Dispatcher.d.ts
declare module "Dispatcher" {
	type Dispatcher = {
		/**
		 * Creates a new Dispatcher instance.
		 * @returns A new Dispatcher instance.
		 */
		new (): Dispatcher;

		/**
		 * Subscribes a callback function to an event.
		 * @param event The event name to subscribe to.
		 * @param callback The callback function to be executed when the event is published.
		 * @param callbackName An optional name for the callback function.
		 * @returns A function to unsubscribe the callback.
		 */
		Subscribe(event: string, callback: (...args: unknown[]) => void, callbackName?: string): () => void;

		/**
		 * Alias for `Subscribe`.
		 * @param event The event name to subscribe to.
		 * @param callback The callback function to be executed when the event is published.
		 * @param callbackName An optional name for the callback function.
		 * @returns A function to unsubscribe the callback.
		 */
		subscribe(event: string, callback: (...args: unknown[]) => void, callbackName?: string): () => void;

		/**
		 * Subscribes a callback function to an event, but only fires once.
		 * @param event The event name to subscribe to.
		 * @param callback The callback function to be executed when the event is published.
		 * @param callbackName An optional name for the callback function.
		 */
		SubscribeOnce(event: string, callback: (...args: unknown[]) => void, callbackName?: string): void;

		/**
		 * Unsubscribes a callback from an event.
		 * @param event The event name to unsubscribe from.
		 * @param callbackName An optional name for the callback function.
		 */
		Unsubscribe(event: string, callbackName?: string): void;

		/**
		 * Alias for `Unsubscribe`.
		 * @param event The event name to unsubscribe from.
		 * @param callbackName An optional name for the callback function.
		 */
		unsubscribe(event: string, callbackName?: string): void;

		/**
		 * Publishes an event and calls all subscribed callbacks with the provided arguments.
		 * @param event The event name to publish.
		 * @param payload The data to pass to the callback functions.
		 * @returns The results of all callback functions.
		 */
		Publish(event: string, ...args: unknown[]): unknown[];

		/**
		 * Publishes an event but defers the execution of the callbacks to avoid blocking.
		 * @param event The event name to publish.
		 * @param payload The data to pass to the callback functions.
		 */
		PublishDeferred(event: string, ...args: unknown[]): void;

		/**
		 * Alias for `Publish`.
		 * @param event The event name to publish.
		 * @param payload The data to pass to the callback functions.
		 */
		publish(event: string, ...args: unknown[]): void;

		/**
		 * Publishes an event without yielding. Executes all callback functions immediately.
		 * @param event The event name to publish.
		 * @param payload The data to pass to the callback functions.
		 */
		PublishNoYield(event: string, ...args: unknown[]): void;
	};

	/**
	 * Creates a new Dispatcher instance.
	 * @returns A new Dispatcher instance.
	 */
	export function createDispatcher(): Dispatcher;

	/**
	 * Singleton instance of the Dispatcher.
	 */
	export const DispatcherSingleton: Dispatcher;
}
