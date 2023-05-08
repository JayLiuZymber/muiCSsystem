import React from 'react';
import NewAssignedClients from './NewAssignedClients';
import AssignedClients from './AssignedClients';

export default function Home () {
    return (
        <div>
            <NewAssignedClients></NewAssignedClients>
            <AssignedClients></AssignedClients>
        </div>
    )
};