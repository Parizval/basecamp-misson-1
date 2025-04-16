import { Enlisted as EnlistedEvent } from "../generated/Enlist/Enlist";
import { Enlisted } from "../generated/schema";

export function handleEnlisted(event: EnlistedEvent): void {
  let id = event.transaction.hash;
  let enlisted = new Enlisted(id);

  enlisted.account = event.params.source;

  enlisted.blockNumber = event.block.number;
  enlisted.blockTimestamp = event.block.timestamp;

  enlisted.transactionHash = id;

  enlisted.save();
}
