import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'Thomas Bohn',
            image: 'https://www.comedix.de/grafik/figuren/obelix3d.gif',
            places: 3
        }
    ];

    return <UsersList items={USERS} />;
}

export default Users;
