import AuthCard from "@/components/auth/AuthCard";
import AuthHeader from "@/components/auth/AuthHeader";
import SignupForm from "@/components/auth/SignupForm";
import AuthFooter from "@/components/auth/AuthFooter";
import Image from "next/image";

export default function Page() {
  return (
    <AuthCard>
      <AuthHeader
        name="Sign up BuildFast"
        subtitle="Start accepting MTN Mobile Money and Orange Money payments in minutes."
        logo={
    <Image
      src="/fav.png"
      alt="BuildFast"
      width={64}
      height={64}
    />
  }
      />

      <SignupForm />

      <AuthFooter
        question="Already have an account?"
        actionLabel="Sign in"
        href="/auth/login"
      />
    </AuthCard>
  );
}