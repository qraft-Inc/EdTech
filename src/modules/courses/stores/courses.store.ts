import { makeObservable, observable, action } from "mobx";
import { BaseStore } from "@/common/stores/base-store";
import { useApi } from "@/common/hooks/api/api";
import { useStore } from "@/common/stores/base-store";
import { SharedStore } from "@/common/stores/shared-store";
import { CourseModel } from "@/modules/courses/models/course.model";

export class CoursesStore extends BaseStore {
  @observable category: string = "course category";
  @observable loading: boolean = false;

  constructor() {
    super();
    makeObservable(this);
  }

  hydrate = (data?: { category?: string }) => {
    if (!data) return;
  };

  @action getAllCourses = () => {
    const api = useApi();
    const sharedStore = useStore<SharedStore>(SharedStore);
    this.loading = true;

    api
      .GET({
        endpoint: `/api/courses`,
        // endpoint: `/api/courses/${userId}/`,
      })
      .then((res): void => {
        sharedStore.store.courses = res as unknown as CourseModel[];
        // console.log(res);
      })
      .catch((e: Error) => {
        console.log("GET ERROR", e);
      })
      .finally(() => {
        this.loading = false;
      });
  };
}
