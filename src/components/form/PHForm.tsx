/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  Resolver,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TFormConfig = {
  defaultValues?: Record<string, any>;
  resolver?: Resolver;
};

type TFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
} & TFormConfig;

const PHForm = ({
  onSubmit,
  children,
  defaultValues,
  resolver,
}: TFormProps) => {
  const formConfig: TFormConfig = {};
  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }
  if (resolver) {
    formConfig["resolver"] = resolver;
  }

  const method = useForm(formConfig);

  const submit: SubmitHandler<FieldValues> = (data) => {
    onSubmit(data);
    method.reset();
  };
  return (
    <FormProvider {...method}>
      <form onSubmit={method.handleSubmit(submit)}>{children}</form>
    </FormProvider>
  );
};

export default PHForm;
