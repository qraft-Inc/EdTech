import { TrainerModel } from "@/modules/trainer/models/trainer.model";

export interface SharedStoreModel {
  trainers: TrainerModel[];
  trainer: TrainerModel;
}
