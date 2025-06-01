import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import UsersComponent from "../components/UsersPage.tsx";
import { Users } from "../utils/types.ts";

export const handler: Handlers = {
    GET: async(_req:Request, ctx:FreshContext<unknown,Users[]>) =>{
        const url = "https://jsonplaceholder.typicode.com/users"
        const response = await fetch(url)
        const result = await response.json()
        const usuarios = result.map((user: Users) => ({
            name: user.name,
            email: user.email
        }));

        return ctx.render(usuarios);
    }
};

export default (props:PageProps<Users[]>) => {
    return (
        <div>
            <h1>Lista de Usuarios</h1>
            <UsersComponent data={props.data} />
        </div>
    );
}
