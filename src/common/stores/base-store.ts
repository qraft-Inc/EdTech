// enable static rendering ONLY on server
import { enableStaticRendering } from "mobx-react";

enableStaticRendering(typeof window === "undefined");

export abstract class BaseStore {
  abstract hydrate(data?: object): void;
}

// init a client store that we will send to client (one store for client)
const stores: BaseStore[] = [];

export function useStore<T extends BaseStore>(
  Store: { new (): T },
  initialData?: object
): T {
  const storeIndex = stores.findIndex((value: BaseStore) => {
    return value instanceof Store;
  });
  const store = storeIndex != -1 ? (stores[storeIndex] as T) : null;
  const value: T = store ?? new Store();

  // hydrate to store if receive initial data
  if (initialData) value.hydrate(initialData);

  // Create a store on every server request
  if (typeof window === "undefined") return value;

  // Otherwise it's client, remember this store and return
  if (!store) stores.push(value);

  // return useLocalObservable<T>(() => new Store());
  return value;
}
