import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold">Sejam Bem-Vindos</h1>
      <hr />
      <nav className="mt-6">
        <Link className="text-blue-500" href= "/portal">Login</Link> ou {' '}
        <Link className="text-blue-500" href= "/portal/cadastro">Cadastre-se</Link>
      </nav>
    </main>
  );
}
