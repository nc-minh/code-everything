import { useRef, useState } from "react";
import { Form } from "./containers/Form";
import { Header } from "./containers/Header";
import { Step } from "./containers/Step";
import "./main.css";

let action = "";

function App() {
  const buttonRef = useRef();
  const formRef = useRef();

  const handleSubmit = (data) => {
    if (action === "submit") {
      if (data) {
        alert("Thành công");
      } else {
        alert("Vui lòng điền đủ thông tin");
      }
      action = "";
    }
  };

  const validate = (values) => {
    const errors = {};

    if (values?.templateType === "0") {
      errors.templateType = "Error";
    }

    const regex = /^(name|title|email|id|username)/i;
    Object.keys(values).forEach((key) => {
      if (regex.test(key)) {
        if (!values?.[key]) {
          errors[key] = "Error";
        }
      }
    });
    return errors;
  };

  return (
    <div className="container">
      <Header
        onSubmit={() => {
          action = "submit";
          buttonRef?.current.click?.();
        }}
      />
      <Form onSubmit={handleSubmit} validate={validate}>
        {({ errors, handleSubmitForm }) => (
          <form className="form" onSubmit={handleSubmitForm} ref={formRef}>
            <Step errors={errors} formRef={formRef} />
            <button hidden={true} ref={buttonRef}></button>
          </form>
        )}
      </Form>
    </div>
  );
}

export default App;
