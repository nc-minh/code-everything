import { useState } from "react";

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
interface Props {
  validate: (values: any) => any;
  onSubmit: (data) => void;
  children: (props: any) => JSX.Element;
}

export function Form(props: Props) {
  const { onSubmit, validate, children } = props;
  const [errors, setErrors] = useState(null);

  const handleSubmitForm = (event: any) => {
    event.preventDefault();
    const formData = new FormData(event?.target);
    const data = {};

    for (let [name, value] of formData) {
      data[name] = value;
    }
    const err = validate(data);
    setErrors(err);
    onSubmit(Object.keys(err).length > 0 ? null : data);
  };

  return (
    <div>{children({ onSubmit, validate, handleSubmitForm, errors })}</div>
  );
}
