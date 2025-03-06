import { Players } from "@rbxts/services";
import ThenPromise from "promise";

const observePlayer = (callback: (player: Player) => (() => void) | undefined): (() => void) => {
	// eslint-disable-next-line prefer-const
	let playerAddedConn: RBXScriptConnection;
	let playerRemovingConn: RBXScriptConnection;

	const cleanupsPerPlayer: { [key: string]: () => void } = {};
	const OnPlayerAdded = (player: Player) => {
		if (playerAddedConn.Connected) {
			task.spawn(function () {
				const cleanup = callback(player);
				if (typeIs(cleanup, "function")) {
					if (playerAddedConn.Connected && player.Parent) {
						cleanupsPerPlayer[player.UserId] = cleanup;
					} else {
						task.spawn(cleanup);
					}
				}
			});
		}
	};

	const OnPlayerRemoving = (player: Player) => {
		const cleanup = cleanupsPerPlayer[player.UserId];
		delete cleanupsPerPlayer[player.UserId];
	};

	playerAddedConn = Players.PlayerAdded.Connect(OnPlayerAdded);
	// eslint-disable-next-line prefer-const
	playerRemovingConn = Players.PlayerRemoving.Connect(OnPlayerRemoving);

	return () => {};
};
