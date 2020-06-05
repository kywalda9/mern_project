import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'Thomas Bohn',
            image: '/profile.jpg',
            places: 3
        }
    ];

    return <UsersList items={USERS} />;
};

export default Users;
