import { makeObservable, observable, action } from "mobx";
import { BaseStore } from "@/common/stores/base-store";
import { CategoryModel } from "@/modules/courses/models/category.model";
import { useApi } from "@/common/hooks/api/api";
import { useStore } from "@/common/stores/base-store";
import { SharedStore } from "@/common/stores/shared-store";

export class AddCategoryStore extends BaseStore {
  @observable name: string = "";

  @observable loading: boolean = false;

  constructor() {
    super();
    makeObservable(this);
  }

  hydrate = (data?: { name?: string }) => {
    if (!data) return;
    if (data.name) this.name = data.name;
  };

  @action onNameChanged = (value: string) => {
    this.name = value;
  };

  @action onAddCategorySubmit = (
    isSignedIn: any,
    callback: (result: { success: boolean; res?: any; error?: string }) => void
  ) => {
    if (!isSignedIn) return console.log("Not logged in");
    const api = useApi();
    const sharedStore = useStore<SharedStore>(SharedStore);

    this.loading = true;
    api
      .POST({
        endpoint: "/api/courses/categories",
        data: {
          name: this.name,
        },
      })
      .then((res): void => {
        this.name = "";
        // sharedStore.store.categories = res as unknown as CategoryModel[];
        callback({ success: true });
        console.log(res);
      })
      .catch((e: Error) => {
        console.log("POST ERROR", e);
      })
      .finally(() => {
        this.loading = false;
      });
  };

  @action getCategories = () => {
    const api = useApi();
    const sharedStore = useStore<SharedStore>(SharedStore);
    this.loading = true;

    api
      .GET({
        endpoint: `/api/courses/categories`,
      })
      .then((res): void => {
        sharedStore.store.categories = res as unknown as CategoryModel[];
        // console.log(res, "kk");
      })
      .catch((e: Error) => {
        console.log("GET ERROR", e);
      })
      .finally(() => {
        this.loading = false;
      });
  };
}
