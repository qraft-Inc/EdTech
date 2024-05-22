import { makeObservable, observable, action } from "mobx";
import { BaseStore } from "@/common/stores/base-store";
import {
  CloudinaryUploadWidgetInfo,
  CloudinaryUploadWidgetError,
  CloudinaryUploadWidgetResults,
} from "next-cloudinary";
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

  @observable price: string = "";

  @observable chapter: string = "";

  @observable author: string = "";

  @observable category: string = "course category";

  @observable courseDescritpion: string = "";

  @observable chapterDescritpion: string = "";

  @observable attachDescritpion: string = "";

  @observable loading: boolean = false;

  constructor() {
    super();
    makeObservable(this);
  }

  hydrate = (data?: { selectedImage?: File }) => {
    if (!data) return;
    if (data.selectedImage) this.selectedImage = data.selectedImage;
  };

  @action onSelectSuccessSwitch = (fileType: string) => {
    switch (fileType) {
      case "photo":
        return this.onSelectCoverPhotoSuccess;
      case "video":
        return this.onSelectVideoSuccess;
      case "document":
        return this.onSelectAttachmentSuccess;
      default:
        break;
    }
  };

  @action onSelectCoverPhotoSuccess = (
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
        this.coverPhotoUrl = secureUrl as unknown as string;
        console.log("Upload success:", secureUrl);
        // Your success handling logic here...
      }
    }
    // widget.close();
  };

  @action onSelectVideoSuccess = (
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
        this.videoUrl = secureUrl as unknown as string;
        // console.log("Upload success:", secureUrl);
        // Your success handling logic here...
      }
    }
    // widget.close();
  };

  @action onSelectAttachmentSuccess = (
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
        this.attachmentUrl = secureUrl as unknown as string;
        // console.log("Upload success:", secureUrl);
        // Your success handling logic here...
      }
    }
    // widget.close();
  };

  @action onUploadFaliure = (error: CloudinaryUploadWidgetError) => {
    console.log(error);
  };

  @action onUploadAddedSwitch = (fileType: string) => {
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

  @action onPriceChanged = (value: string) => {
    console.log(value);
    this.price = value;
  };

  @action onChapterChanged = (value: string) => {
    this.chapter = value;
  };

  @action onAuthorChanged = (value: string) => {
    this.author = value;
  };

  @action onCategoryChanged = (key: any) => {
    this.category = key;
  };

  @action onCourseDescriptionChanged = (value: string) => {
    this.courseDescritpion = value;
  };

  @action onChapterDescriptionChanged = (value: string) => {
    this.chapterDescritpion = value;
  };

  @action onAttachmentDescriptionChanged = (value: string) => {
    this.attachDescritpion = value;
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
          author: this.author,
          imageUrl: this.coverPhotoUrl,
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
        console.log("POST ERROR", e);
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
        console.log("GET ERROR", e);
      })
      .finally(() => {
        this.loading = false;
      });
  };

  @action onUpdateCourseSubmit = (
    isSignedIn: any,
    courseId: string | string[],
    callback: (result: { success: boolean; res?: any; error?: string }) => void
  ) => {
    if (!isSignedIn) return console.log("Not logged in");
    const api = useApi();
    const sharedStore = useStore<SharedStore>(SharedStore);

    this.loading = true;
    api
      .PATCH({
        endpoint: `/api/courses/${courseId}/`,
        data: {
          title: this.chapter,
          category: this.category,
          price: parseFloat(this.price),
          courseDescription: this.courseDescritpion,
          chapterDescription: this.courseDescritpion,
          videoUrl: this.videoUrl,
          attachDescritpion: this.attachDescritpion,
          attachmentUrl: this.attachmentUrl,
        },
      })
      .then((res): void => {
        // sharedStore.store.trainer = res as TrainerModel;
        callback({ success: true });
        console.log(res);
      })
      .catch((e: Error) => {
        console.log("UPDATE ERROR", e);
      })
      .finally(() => {
        this.loading = false;
      });
  };
}
