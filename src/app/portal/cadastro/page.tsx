import SignUpForm from "@/modules/auth/components/sign-up-form";

export default function SignUpPage() {

  return (
    <main className="flex min-h-screen flex-col items-center place-content-center bg-[#036B91]">
      <div className="container mx-auto max-w-screen-lg">
          <img src="/imagens/1714516192320.png" alt="logo-profind" className=" mx-auto mb-0 lg:mb-0" width={400} />
      </div>
      <SignUpForm/>
    </main>
  );
}