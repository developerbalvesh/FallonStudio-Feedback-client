import React from "react";
import PublicLayout from "../../layout/PublicLayout";
import { useForm } from "react-hook-form";
import Input from "../../components/form/Input";
import BreadCrub from "../../components/BreadCrub";
import Button from "../../components/form/Button";
import { useMutation } from "@tanstack/react-query";
import { publicCommunication } from "../../communication/publicCommunication";
import toast from "react-hot-toast";
import LoadingButton from "../../components/form/LoadingButton";

const navs = [
  { name: "Home", link: "#" },
  { name: "Feedback", link: "#" },
];

export default function Feedback() {
  document.title = "Feedback";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { mutate, isPending } = useMutation({
    mutationFn: (data) => publicCommunication.addFeedback(data),
    onSuccess: ({ data }) => {
      if (data.success) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    },
    onError: (errors) => {
      console.log(errors);
      toast.error(errors.message);
    },
  });

  const handleAdd = (data) => {
    console.log(data);
    mutate(data);
  };
  return (
    <>
      <PublicLayout>
        <BreadCrub navs={navs} />
        <div className="py-10 md:px-5 max-w-[650px] mx-auto h-full">
          <h1 className="text-4xl md:text-5xl text-center text-blue-950 dark:text-gray-50 py-2">
            Feedback Form
          </h1>
          <p className="px-3 pb-6 text-gray-400 text-center">
            Tell us about your experience on our website for improvements.
          </p>
          <form onSubmit={handleSubmit(handleAdd)}>
            <Input
              label={"Full Name"}
              placeholder={"Enter Full Name"}
              type="text"
              register={register("fullName", {
                required: "Full Name is required!",
              })}
              errorMessage={errors?.fullName?.message}
            />

            <Input
              label={"Email"}
              placeholder={"Enter Email Address"}
              type="text"
              register={register("email", {
                required: "Email is required!",
                validate: (value) => {
                  if (!value.includes("@" || !value.includes("."))) {
                    return "Enter valid Email";
                  }
                },
              })}
              errorMessage={errors?.email?.message}
            />

            <Input
              label={"Message"}
              placeholder={"Enter Message"}
              type="textarea"
              register={register("feedbackMessage", {
                required: "Message is required!",
              })}
              errorMessage={errors?.feedbackMessage?.message}
            />
            <div className="text-center">
              {isPending ? <LoadingButton /> : <Button />}
            </div>
          </form>
        </div>
      </PublicLayout>
    </>
  );
}
