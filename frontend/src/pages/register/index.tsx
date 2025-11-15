import { LuGraduationCap } from "react-icons/lu";
import { Input } from "../../components/input";
import { Link } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../srevice/api";

const schema = z.object({
    name: z.string().nonempty("o campo nome é obrigatório"),
    email: z.string().email("email inválido").nonempty("o campo email é obrigatório"),
    password: z.string().min(6, "senha deve ter pelo menos 6 caracteres").nonempty("o campo senha é obrigatória")
})

type FormData = z.infer<typeof schema>;

export function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(schema),
        mode: "onChange"
    })

    async function registerUser(data: FormData) {
        try {
            const email = data.email;
            const password = data.password;

            await api.post("/users", {
                name,
                email,
                password
            })

            alert("Cadastro realizado com sucesso!")
        } catch (error) {
            alert("Erro ao cadastrar usuário. Tente novamente.")
            console.log("Erro ao cadastrar usuário: " + error)
        }
    }

    return (
        <div className="bg-zinc-300/10 w-full h-screen flex flex-col items-center px-24 py-12">

            <div className="mb-6 flex flex-col items-center">
                <p className="flex flex-row items-center font-bold sm:text-3xl text-2xl">
                    <LuGraduationCap className="text-blue-950 mr-2 sm:text-5xl text-4xl" />
                    mira
                </p>
                <span className="text-center ">organize seus estudos e acompanhe seu progresso.</span>
            </div>

            <section className="bg-white flex flex-col gap-8 rounded-xl border-2 border-gray-300 shadow-2xl py-8 sm:w-4xs w-96 px-6">
                <div>
                    <p className="text-black font-bold sm:text-2xl text-xl">Criar conta</p>
                    <span className="text-zinc-500 sm:text-base text-sm">Crie sua conta para começar a organizar seus estudos</span>
                </div>

                <form onSubmit={handleSubmit(registerUser)} className="flex flex-col">
                    <label className="text-black font-medium mb-1 sm:text-base text-sm">Nome</label>
                    <Input
                        name="name"
                        type="text"
                        placeholder="seu nome"
                        register={register}
                        error={errors.name?.message}
                    />
                    <label className="text-black font-medium mt-4 mb-1 sm:text-base text-sm">Email</label>
                    <Input
                        name="email"
                        type="text"
                        placeholder="seu@email.com"
                        register={register}
                        error={errors.email?.message}
                    />
                    <label className="text-black font-medium mt-4 mb-1 sm:text-base text-sm">Senha</label>
                    <Input
                        name="password"
                        type="password"
                        placeholder="••••••••"
                        register={register}
                        error={errors.password?.message}
                    />
                    <button type="submit" className="h-10 w-full bg-blue-950 rounded-md text-white cursor-pointer hover:scale-105 transition-all mt-6 sm:text-base text-sm">
                        Criar conta
                    </button>
                </form>

                <p className="text-center sm:text-base text-sm">Já possui conta? <Link to='/login' className="text-blue-950 font-medium underline">Entre aqui</Link></p>
            </section>

        </div>
    )
}