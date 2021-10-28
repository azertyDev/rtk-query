import React, { FC } from "react";
import { IUser } from "../../models/IUser";

interface UsersItemPropsType {
  user: IUser;
}

export const UsersItem: FC<UsersItemPropsType> = ({ user }) => {
  return (
    <div>
      <p>
        <strong>{user.id}.</strong>
        {user.name}
      </p>
      <img src={user.avatar} alt="" />
    </div>
  );
};
