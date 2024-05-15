import { makeObservable, observable } from "mobx";
import { BaseStore } from "@/common/stores/base-store";
import { SharedStoreModel } from "@/common/models/shared-store.model";

export class SharedStore extends BaseStore {
  @observable
  store: SharedStoreModel = {
    trainers: [],
    courses: [],
    trainer: { id: "", fullName: "", email: "", userId: "" },
    course: { id: "", title: "", url: "" },
  };

  constructor() {
    super();
    makeObservable(this);
  }
  hydrate = (data?: { store?: SharedStoreModel }) => {
    if (!data) return;
    if (data.store) this.store = data.store;
  };
}
