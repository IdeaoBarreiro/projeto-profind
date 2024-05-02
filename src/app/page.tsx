import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-24 rounded-b-lg bg-[#036B91]">
      <div className="flex flex-row-reverse">
        <div>
          <Button asChild className="mr-10 mt-6 bg-[#005270]">
            <Link className="text-blue-500" href="/portal/cadastro">Cadastre-se</Link>
          </Button>
        </div>
        <div>
          <Button asChild className="mr-5 mt-6 bg-[#005270]">
            <Link className="text-blue-500" href="/portal/login">Login</Link>
          </Button>
        </div>
        <div className="flex flex-row">
          <img src="/imagens/1714516192320.png" alt="logo-profind" width={180} />
        </div>
      </div>
      <main className="flex min-h-screen flex-col items-center p-24">
        <h1 className="text-4xl font-bold">Sejam Bem-Vindos</h1>
        <h6 className="font-bold">Descrição aqui</h6>
      </main>
    </div>
  );
}
