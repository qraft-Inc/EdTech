import { makeObservable, observable, action } from "mobx";
import { BaseStore } from "@/common/stores/base-store";
import {
  CloudinaryUploadWidgetInfo,
  CloudinaryUploadWidgetError,
  CloudinaryUploadWidgetResults,
} from "next-cloudinary";
import {
  EditorState,
  ContentState,
  convertFromHTML,
  convertToRaw,
} from "draft-js";
import draftToHtml from "draftjs-to-html";
import { useApi } from "@/common/hooks/api/api";
import { useStore } from "@/common/stores/base-store";
import { SharedStore } from "@/common/stores/shared-store";
import { CourseModel } from "@/modules/courses/models/course.model";

export class AddCourseStore extends BaseStore {
  @observable selectedImage: File | null = null;

  @observable selectedVideo: File | null = null;

  @observable coverPhotoUrl: string = "";

  @observable videoUrl: string = "";

  @observable attachmentUrl: string = "";

  @observable course: string = "";

  @observable chapter: string = "";

  @observable author: string = "";

  @observable category: string = "category";

  @observable descritpion: string = "";

  @observable loading: boolean = false;

  constructor() {
    super();
    makeObservable(this);
  }

  hydrate = (data?: { selectedImage?: File }) => {
    if (!data) return;
    if (data.selectedImage) this.selectedImage = data.selectedImage;
  };

  @action onSelectSuccess = (
    result: CloudinaryUploadWidgetResults,
    widget: any
  ) => {
    if (typeof result === "object" && result !== null) {
      const info = result as unknown as CloudinaryUploadWidgetInfo;
      if (
        info &&
        info.info &&
        typeof info.info === "object" &&
        "secure_url" in info.info
      ) {
        const secureUrl = info.info.secure_url;
        // console.log("Upload success:", secureUrl);
        // Your success handling logic here...
      }
    }
    widget.close();
  };

  @action onUploadFaliure = (error: CloudinaryUploadWidgetError) => {
    console.log(error);
  };

  @action onUploadSwitch = (fileType: string) => {
    switch (fileType) {
      case "photo":
        return this.onUploadCoverPhoto;
      case "video":
        return this.onUploadVideo;
      case "document":
        return this.onUploadAttachment;
      default:
        break;
    }
  };

  @action onUploadCoverPhoto = (
    result: CloudinaryUploadWidgetResults,
    widget: any
  ) => {
    let file;
    if (typeof result === "object" && result !== null) {
      const info = result as unknown as CloudinaryUploadWidgetInfo;
      if (
        info &&
        info.info &&
        typeof info.info === "object" &&
        "file" in info.info
      ) {
        const file = info.info.file as unknown as CloudinaryUploadWidgetInfo;
        if (file && typeof file === "object" && "type" in file) {
          const type = file.type;
          if (!type.startsWith("image/")) return widget.destroy();
        }
        // Your success handling logic here...
      }
    }
  };

  @action onUploadVideo = (
    result: CloudinaryUploadWidgetResults,
    widget: any
  ) => {
    let file;
    if (typeof result === "object" && result !== null) {
      const info = result as unknown as CloudinaryUploadWidgetInfo;
      if (
        info &&
        info.info &&
        typeof info.info === "object" &&
        "file" in info.info
      ) {
        const file = info.info.file as unknown as CloudinaryUploadWidgetInfo;
        if (file && typeof file === "object" && "type" in file) {
          const type = file.type;
          if (!type.startsWith("video/")) return widget.destroy();
        }
        // Your success handling logic here...
      }
    }
  };

  @action onUploadAttachment = (
    result: CloudinaryUploadWidgetResults,
    widget: any
  ) => {
    let file;
    if (typeof result === "object" && result !== null) {
      const info = result as unknown as CloudinaryUploadWidgetInfo;
      if (
        info &&
        info.info &&
        typeof info.info === "object" &&
        "file" in info.info
      ) {
        const file = info.info.file as unknown as CloudinaryUploadWidgetInfo;
        if (file && typeof file === "object" && "type" in file) {
          const type = file.type;
          if (!type.startsWith("application/")) return widget.destroy();
        }
        // Your success handling logic here...
      }
    }
  };

  @action onCourseChanged = (value: string) => {
    this.course = value;
  };

  @action onChapterChanged = (value: string) => {
    console.log(value);
    this.chapter = value;
  };

  @action onAuthorChanged = (value: string) => {
    console.log(value);
    this.author = value;
  };

  @action onCategoryChanged = (key: any) => {
    console.log(key);
    this.category = key;
  };

  @action onDescriptionChanged = (value: string) => {
    this.descritpion = value;
  };

  @action onAddCourseSubmit = (
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
        endpoint: "/api/courses",
        data: {
          title: this.course,
          userId: userId,
        },
      })
      .then((res): void => {
        this.course = "";
        // sharedStore.store.trainer = res as TrainerModel;
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

  @action getCourses = (userId: any, isSignedIn: any) => {
    if (!isSignedIn) return console.log("Not logged in");
    const api = useApi();
    const sharedStore = useStore<SharedStore>(SharedStore);
    this.loading = true;

    api
      .GET({
        endpoint: `/api/courses/?id=${userId}`,
        // endpoint: `/api/courses/${userId}/`,
      })
      .then((res): void => {
        sharedStore.store.courses = res as unknown as CourseModel[];
        console.log(res);
      })
      .catch((e: Error) => {
        console.log("LOGIN ERROR", e);
      })
      .finally(() => {
        this.loading = false;
      });
  };

  @action onUpdateCourseSubmit = (
    userId: any,
    isSignedIn: any,
    callback: (result: { success: boolean; res?: any; error?: string }) => void
  ) => {
    if (!isSignedIn) return console.log("Not logged in");
    const api = useApi();
    const sharedStore = useStore<SharedStore>(SharedStore);

    this.loading = true;
    api
      .PATCH({
        endpoint: "/api/courses",
        data: {
          title: this.chapter,
          userId: userId,
        },
      })
      .then((res): void => {
        this.course = "";
        // sharedStore.store.trainer = res as TrainerModel;
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
