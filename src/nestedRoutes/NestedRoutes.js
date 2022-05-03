import React from 'react';
import { Routes, Route, Link, Outlet, useParams } from 'react-router-dom';

const NestedRoutes = () => {
  const users = [
    {
      id: '1',
      firstName: 'Roy',
      firstName: 'Cerdan',
    },
    {
      id: '2',
      firstName: 'Angela',
      firstName: 'Berrocal',
    },
  ];
  return (
    <>
      <h1>React Router</h1>

      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="users/*" element={<Users users={users} />} />
          {/*
         <Route path="users/*" element={<Users users={users} />}>
          <Route path=":userId" element={<User />} />
        </Route>
         */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
};

export default NestedRoutes;

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

const Users = ({ users }) => {
  return (
    <>
      <h1>Users</h1>
      <Routes>
        <Route index element={<UserList users={users} />} />
        <Route path=":userId" element={<UserItem users={users} />} />
      </Routes>
    </>
  );
};

const UserList = ({ users }) => {
  return (
    <>
      <h2>User List</h2>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={user.id}>
              {user.firstName} {user.lastName}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

const UserItem = () => {
  const { userId } = useParams();

  return (
    <>
      <h2>User Item: {userId}</h2>

      <Link to="/users">Back to Users</Link>
    </>
  );
};

const Layout = () => {
  return (
    <>
      <nav
      /*style={{
            borderBottom: 'solid 1px',
            paddingBottom: '1rem',
          }}*/
      >
        <Link to="/home">Home</Link> <Link to="/users">Users</Link>
      </nav>

      <Outlet />
    </>
  );
};

const NoMatch = () => {
  return (
    <>
      <h1>Not Found</h1>
    </>
  );
};
