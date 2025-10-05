"use client";

import CountrySelector from "@/components/form/CountrySelector";
import FooterLink from "@/components/form/FooterLink";
import InputDiv from "@/components/form/InputDiv";
import SelectDiv from "@/components/form/SelectDiv";
import { Button } from "@/components/ui/button";
import {
  INVESTMENT_GOALS,
  PREFERRED_INDUSTRIES,
  RISK_TOLERANCE_OPTIONS,
} from "@/lib/constants";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      country: "BD",
      investmentGoals: "Grw",
      riskTolerance: "Medium",
      preferredIndustry: "Tecngy",
    },
    mode: "onBlur",
  });

  const onSubmit = async (data: SignUpFormData) => {
    console.log(data);
  };

  return (
    <>
      <h1 className="form-title">Sign Up & Personalize</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <InputDiv
          name="fullName"
          label="Full Name"
          placeholder="Enter your fullname"
          register={register}
          validation={{ required: "Full name is required", minLength: 2 }}
          error={errors.fullName}
        />
        <InputDiv
          name="email"
          type="email"
          label="Email"
          placeholder="Enter your email"
          register={register}
          validation={{
            required: "Email is required",
            pattern: /^\w+@\w+\.\w+$/,
            message: "Email is required",
          }}
          error={errors.email}
        />
        <InputDiv
          name="password"
          type="password"
          label="Password"
          placeholder="Enter a strong password"
          register={register}
          validation={{ required: "Password is required", minLength: 8 }}
          error={errors.password}
        />
        <CountrySelector
          name="country"
          label="Country"
          control={control}
          error={errors.country}
          required
        />
        <SelectDiv
          name="investmentGoals"
          label="Investment Goals"
          placeholder="Select your investment goals"
          options={INVESTMENT_GOALS}
          control={control}
          error={errors.investmentGoals}
          required
        />
        <SelectDiv
          name="riskTolerence"
          label="Risk Tolerence"
          placeholder="Select your risk level"
          options={RISK_TOLERANCE_OPTIONS}
          control={control}
          error={errors.riskTolerance}
          required
        />
        <SelectDiv
          name="prefferedIndustry"
          label="Preffered Industry"
          placeholder="Select your preffered industry"
          options={PREFERRED_INDUSTRIES}
          control={control}
          error={errors.preferredIndustry}
          required
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="yellow-btn w-full mt-5"
        >
          {isSubmitting ? "Creating Account" : "Start Your Investing Journey"}
        </Button>

        <FooterLink
          text="Already have an account?"
          linkText="Sign in"
          href="/sign-in"
        />
      </form>
    </>
  );
};

export default SignUp;
