import { BaseModel } from "@/common/models/base.model";
import { BaseUserModel } from "@/common/models/base-user.model";

export interface TrainerModel extends BaseModel, BaseUserModel {
  userId: string;
}
