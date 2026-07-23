import AuthCard from "@/components/auth/AuthCard";
import AuthHeader from "@/components/auth/AuthHeader";
import SignupForm from "@/components/auth/SignupForm";
import AuthFooter from "@/components/auth/AuthFooter";
import Image from "next/image";

export default function Page() {
  return (
    <AuthCard>
      <AuthHeader
        title="Create your BuildFast account"
        subtitle="Start accepting MTN Mobile Money and Orange Money payments in minutes."
//         logo={
//     <Image
//       src="/images/buildfast-logo.svg"
//       alt="BuildFast"
//       width={160}
//       height={40}
//     />
//   }
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