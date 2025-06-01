import { FunctionalComponent } from "preact";
import { Users } from "../utils/types.ts";

type Data = {
  data: Users[];
}

const UsersComponent: FunctionalComponent<Data> = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((user, index) => (
          <tr key={index}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsersComponent;