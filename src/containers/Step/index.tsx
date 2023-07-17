import { useState } from "react";
import { StepOne } from "../../components/StepOne";
import { StepZero } from "../../components/StepZero";

interface Props {
  errors: any;
  formRef: any;
}

export function Step(props: Props) {
  const { errors, formRef } = props;
  const [step, setStep] = useState(0);

  return (
    <>
      <div className="pb-20">
        <input
          type="button"
          value="0"
          className={step === 0 ? "step-active" : ""}
          onClick={() => setStep(0)}
        />
        <input
          type="button"
          value="1"
          className={step === 1 ? "step-active" : ""}
          onClick={() => setStep(1)}
        />
      </div>
      <StepZero displayed={step === 0} errors={errors} />
      <StepOne displayed={step === 1} errors={errors} formRef={formRef} />
    </>
  );
}
