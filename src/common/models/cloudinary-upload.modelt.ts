import {
  CloudinaryUploadWidgetError,
  CloudinaryUploadWidgetResults,
} from "next-cloudinary";

export interface CloudinaryUploadModel {
  onUpload: (result: CloudinaryUploadWidgetResults) => void;
  result: (result: CloudinaryUploadWidgetResults) => void;
  error: (result: CloudinaryUploadWidgetError) => void;
}
