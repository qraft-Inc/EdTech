import React from "react";
import BaseInput from "@/common/views/forms/base-input";
import { CancelOutlined } from "@mui/icons-material";
import { TrainerSignupModel } from "@/modules/trainer/models/trainer-signup-modal.model";
import { LocaleModel } from "@/common/models/locales.model";
import { observer } from "mobx-react";
import { CreateTrainerStore } from "@/modules/trainer/stores/create-trainer.store";
import { useStore } from "@/common/stores/base-store";
import Loader from "@/common/views/widgets/loader.widget";
import AddTrainerButton from "@/modules/trainer/views/widgets/add-trainer-button.widget";

type TrainerSignupProps = TrainerSignupModel & LocaleModel;

const TrainerSignUpCard = observer((props: TrainerSignupProps) => {
  const { onFullNameChanged, onEmailChanged, onPasswordChanged, loading } =
    useStore<CreateTrainerStore>(CreateTrainerStore);

  return (
    <div className="flex flex-col items-center justify-center w-[90%] md:w-[50%] lg:w-[40%] border-1 border-gray-200 bg-white rounded-sm p-4 m-4">
      {/* <h2 className="text-2xl text-blue-950 font-semibold">
        {props.t("sign_up")}
      </h2> */}
      {loading ? <Loader /> : null}
      <div className="flex items-center justify-between w-full">
        <h3 className="text-2xl text-blue-950 font-light">
          Become a trainer on EdTech
        </h3>
        <CancelOutlined
          className="hover:cursor-pointer"
          style={{ fontSize: 30 }}
          onClick={props.toggleModal}
        />
      </div>
      <BaseInput placeholder="Full Name" onChange={onFullNameChanged} />
      <BaseInput placeholder="Email" onChange={onEmailChanged} />
      <BaseInput placeholder="Password" onChange={onPasswordChanged} />
      <AddTrainerButton t={props.t} />
    </div>
  );
});

export default TrainerSignUpCard;
