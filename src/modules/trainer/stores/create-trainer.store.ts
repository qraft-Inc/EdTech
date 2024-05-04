import { makeObservable, observable, action } from "mobx";
import { BaseStore } from "@/common/stores/base-store";
import { useApi } from "@/common/hooks/api/api";
import { useStore } from "@/common/stores/base-store";
import { SharedStore } from "@/common/stores/shared-store";
import { TrainerModel } from "@/modules/trainer/models/trainer.model";

export class CreateTrainerStore extends BaseStore {
  @observable
  fullName: string = "";

  @observable
  email: string = "";

  @observable
  password: string = "";

  @observable
  loading: boolean = false;

  constructor() {
    super();
    makeObservable(this);
  }

  hydrate = (data?: { email?: string }) => {
    if (!data) return;
    if (data.email) this.email = data.email;
  };

  @action
  onFullNameChanged = (value: string) => {
    this.fullName = value;
  };

  @action
  onEmailChanged = (value: string) => {
    this.email = value;
  };

  @action
  onPasswordChanged = (value: string) => {
    this.password = value;
  };

  @action
  onSubmit = (
    userId: any,
    isSignedIn: any,
    callback: (result: { success: boolean; res?: any; error?: string }) => void
  ) => {
    if (!isSignedIn) return console.log("Not logged in");
    const api = useApi();
    const sharedStore = useStore<SharedStore>(SharedStore);

    this.loading = true;
    api
      .POST({
        endpoint: "/api/trainers",
        data: {
          fullName: this.fullName,
          email: this.email,
          password: this.password,
          userId: userId,
        },
      })
      .then((res): void => {
        this.fullName = "";
        this.email = "";
        this.password = "";
        sharedStore.store.trainer = res as TrainerModel;
        callback({ success: true });
        console.log(res);
      })
      .catch((e: Error) => {
        console.log("LOGIN ERROR", e);
      })
      .finally(() => {
        this.loading = false;
      });
  };
}
