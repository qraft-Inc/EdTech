import React from "react";
import BaseButton from "@/common/views/buttons/base-button";
import { CreateTrainerStore } from "@/modules/trainer/stores/create-trainer.store";
import { LocaleModel } from "@/common/models/locales.model";
import { useStore } from "@/common/stores/base-store";
import { useAuth } from "@clerk/clerk-react";
import { useRouter } from "next/navigation";

const AddTrainerButton = (props: LocaleModel) => {
  const { onSubmit } = useStore<CreateTrainerStore>(CreateTrainerStore);
  const { isSignedIn, userId } = useAuth();

  const router = useRouter();

  const addTrainer = () => {
    onSubmit(userId, isSignedIn, (res) => {
      const { success } = res;
      if (success) router.push("/trainer-dashboard");
    });
  };

  return <BaseButton label={props.t("sign_up")} onClick={addTrainer} />;
};

export default AddTrainerButton;
