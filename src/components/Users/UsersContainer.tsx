import {
  useCreateUserMutation,
  useFetchUsersQuery,
} from "../../services/UserService";
import { UsersItem } from "./UsersItem";
import { useFormik, Form } from "formik";
import {IUser} from "../../models/IUser";

export const UsersContainer = () => {
  const { data: users, isLoading, error } = useFetchUsersQuery();
  const [createUser, {}] = useCreateUserMutation();

  const formik = useFormik({
    initialValues: {
      fullname: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleCreateUser = async () => {
    await createUser({formik.values.fullname, body: name } as IUser);
  };

  return (
    <div>
      {isLoading && <h1>Загрузка данных.......</h1>}
      {error && <h1>{error}</h1>}

      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">Fullname</label>
        <input
          id="fullname"
          name="fullname"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.fullname}
        />

        <button type="submit">Submit</button>
      </form>
      {users &&
        users.map((user) => {
          return <UsersItem key={user.id} user={user} />;
        })}
    </div>
  );
};
