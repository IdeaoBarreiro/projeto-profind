
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectLabel, SelectItem } from "@/components/ui/select";


export default function SignUpForm() {
    return (
        <Card className="w-[500px]">
            <CardHeader>
                <CardTitle className="flex justify-center">Cadastro</CardTitle>
                <CardDescription>Preencha os campos abaixo para se Cadastrar</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Nome Completo</Label>
                            <Input id="name" name="name" required />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="email">E-mail</Label>
                            <Input id="email" name="name" type="email" required />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="password">Senha</Label>
                            <Input id="password" name="password" type="password" required />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="password">Confirmar Senha</Label>
                            <Input id="password" name="password" type="password" required />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <h2 className="text-sm font-medium">Perfil</h2>
                            <Select>
                                <SelectTrigger className="w-[250px]">
                                    <SelectValue placeholder="Selecione o Perfil" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel></SelectLabel>
                                        <SelectItem value="profi">Profissional</SelectItem>
                                        <SelectItem value="pineapple">Usuário</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-center p-1">
                <Button className="">Cadastrar</Button>
            </CardFooter>
            <div className="flex justify-center items-center pb-3">
                <Link href="/portal/login" className={buttonVariants({ variant: "link" })}>
                    Já Tenho Conta
                </Link>
            </div>
        </Card>
    );
}