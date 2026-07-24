import AuthCard from "@/components/auth/AuthCard";
import AuthHeader from "@/components/auth/AuthHeader";
import LoginForm from "@/components/auth/LoginForm";
import AuthFooter from "@/components/auth/AuthFooter";
import Image from "next/image";

export default function Page() {
  return (
    <AuthCard>
      <AuthHeader
        name={'Login to BuildFast'}
        logo={
    <Image
      src="/fav.png"
      alt="BuildFast"
      width={64}
      height={64}
    />
  }
      />

      <LoginForm />

      <AuthFooter
        question="Don't have an account?"
        actionLabel="Sign up"
        href="/auth/sign-up"
      />
    </AuthCard>
  );
}