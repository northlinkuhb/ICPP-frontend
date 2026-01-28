"use client";
import CustomRadio from "@/components/CustomRadio";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formSchema = z.object({
  // contactType: z.enum(["collaborate", "curious"], {
  //   required_error: "Please select a contact type",
  // }),
  name: z.string().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().email("Please enter a valid email address"),
  profession: z
    .string()
    .min(1, "Profession is required")
    .max(100, "Profession is too long"),
  number: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number is too long"),
  message: z
    .string()
    .min(1, "Message is required")
    .max(1000, "Message is too long"),
});

type FormData = z.infer<typeof formSchema>;

const FormSection = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const {
    register,
    handleSubmit,
    // setValue,
    // watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      // contactType: "collaborate",
      name: "",
      email: "",
      profession: "",
      number: "",
      message: "",
    },
  });

  // const selectedOption = watch("contactType");

  const onSubmit = async (data: FormData) => {
    console.log("Form submitted:", data);
    try {
      alert("Form submitted successfully!");
      reset();
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to submit form. Please try again.");
    }
  };

  return (
    <div className="clamp-[px,24px,80px] clamp-[py,40px,120px] bg-white">
      <div>
        <h2 className="text-deep-blue clamp-[text,h2-m,h2-d] clamp-[leading,h2-m,h2-d] font-semibold">
          Get in Touch
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex lg:flex-row flex-col clamp-[pt,24px,40px] text-black clamp-[text,16px,24px] clamp-[leading,23px,36px]  clamp-[gap,20px,50px]">
            <div className="clamp-[min-w,10.1875rem,25rem] md:sticky clamp-[top,4.5rem,8rem] space-y-[8px] z-50 bg-white h-full shrink-0">
              <div className="flex items-center gap-2">
                <CustomRadio
                  id="collaborate"
                  name="contactType"
                  checked={selectedOption === "collaborate"}
                  onChange={() => setSelectedOption("collaborate")}
                  value="collaborate"
                />
                <span>I want to Collaborate</span>
              </div>
              <div className="flex items-center gap-2">
                <CustomRadio
                  id="curious"
                  name="contactType"
                  checked={selectedOption === "curious"}
                  onChange={() => setSelectedOption("curious")}
                  value="curious"
                />
                <span>I am Curious</span>
              </div>
              {/* {errors.contactType && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.contactType.message}
                </p>
              )} */}
            </div>

            <div className="md:grid max-md:flex flex-col md:grid-cols-2 clamp-[text,12px,16px] clamp-[leading,18px,25px] w-full gap-[20px]">
              <div>
                <p className="pb-[6px]">Name</p>
                <input
                  {...register("name")}
                  className={`w-full border outline-none clamp-[px,12px,18px] clamp-[py,12px,15px] ${
                    errors.name ? "border-red-500" : "border-[#AEB6B9]"
                  }`}
                  placeholder="Enter your Name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <p className="pb-[6px]">Email ID</p>
                <input
                  {...register("email")}
                  type="email"
                  className={`w-full border outline-none clamp-[px,12px,18px] clamp-[py,12px,15px] ${
                    errors.email ? "border-red-500" : "border-[#AEB6B9]"
                  }`}
                  placeholder="Enter your Email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <p className="pb-[6px]">Profession</p>
                <input
                  {...register("profession")}
                  className={`w-full border outline-none clamp-[px,12px,18px] clamp-[py,12px,15px] ${
                    errors.profession ? "border-red-500" : "border-[#AEB6B9]"
                  }`}
                  placeholder="Enter your Profession"
                />
                {errors.profession && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.profession.message}
                  </p>
                )}
              </div>

              <div>
                <p className="pb-[6px]">Number</p>
                <input
                  {...register("number")}
                  type="tel"
                  className={`w-full border outline-none clamp-[px,12px,18px] clamp-[py,12px,15px] ${
                    errors.number ? "border-red-500" : "border-[#AEB6B9]"
                  }`}
                  placeholder="Enter your Number"
                />
                {errors.number && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.number.message}
                  </p>
                )}
              </div>

              <div className="col-span-2">
                <p className="pb-[6px]">Message</p>
                <textarea
                  {...register("message")}
                  rows={6}
                  className={`w-full border outline-none clamp-[px,12px,18px] clamp-[py,12px,15px] ${
                    errors.message ? "border-red-500" : "border-[#AEB6B9]"
                  }`}
                  placeholder="Enter your Message"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm ">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <div className="col-span-2 hidden">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full clamp-[py,12px,16px] text-white font-medium clamp-[text,16px,20px] ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-black hover:bg-gray-800"
                  } transition-colors`}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormSection;
