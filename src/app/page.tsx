import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-24 rounded-b-lg bg-[#036B91]">
      <div className="flex flex-row-reverse justify-between">
        <div>
          <Button asChild className="mr-10 mt-6 bg-[#005270]">
            <Link className="text-blue-500" href="/portal/cadastro">Cadastre-se</Link>
          </Button>
          <Button asChild className="mr-8 mt-6 bg-[#005270]">
            <Link className="text-blue-500" href="/portal/login">Login</Link>
          </Button>
        </div>
        <div className="flex ml-5">
          <img src="/imagens/1714516192320.png" alt="logo-profind" width={180} />
        </div>
      </div>
      <main className="flex min-h-screen flex-col items-center p-24">
        <h1 className="text-6xl font-bold mt-15 text-[#005270]">Sejam Bem-Vindos</h1>
        <div className="w-[700px]">
          <p className="mt-20 text-justify text-[#005270]">A PROFIND é uma plataforma inovadora que surge com o propósito de revolucionar a forma como profissionais são classificados e encontrados por seus potenciais clientes. Oferecemos uma plataforma onde os profissionais podem ser avaliados pelos serviços prestados, A PROFIND não apenas facilita a busca por especialistas em diversas áreas, mas também garante transparência e confiabilidade aos usuários.</p>
          <p className="mt-20 text-justify text-[#005270]">Ao permitir que os usuários avaliem os serviços dos profissionais cadastrados, A PROFIND promove uma comunidade onde a qualidade e o desempenho são reconhecidos e valorizados. Isso cria um ambiente em que os melhores profissionais se destacam naturalmente, beneficiando tanto os usuários que buscam serviços quanto os próprios profissionais que oferecem tais serviços.</p>
          <p className="mt-20 text-justify text-[#005270]">Com essa abordagem inovadora e centrada na transparência e na qualidade, A PROFIND está preparada para se destacar no mercado e se tornar uma referência no setor de classificação de profissionais e serviços.</p>
        </div>
      </main>
    </div>
  );
}
