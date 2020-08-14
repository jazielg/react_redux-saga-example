import React from "react";
import { useSelector, useDispatch } from "react-redux";

import * as actionTypes from "../../store/actions/actionTypes";

export default function UserList() {
  const users = useSelector((state) => state.users.data);
  const dispatch = useDispatch();

  function importUsers() {
    // dispatch({ type: "IMPORT_USER" });
    dispatch({ type: actionTypes.IMPORT_USER });
  }

  return (
    <div>
      <h1>User List (Redux Saga)</h1>
      <button type="button" onClick={importUsers}>
        Buscar usuários
      </button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
