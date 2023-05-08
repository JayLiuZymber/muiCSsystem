import React from 'react';
import NewAssignedClients from './NewAssignedClients';
import AssignedClients from './AssignedClients';
import ClientAD from './ClientAD';
import ClientBlog from './ClientBlog';

export default function Home () {
    return (
        <div>
            <NewAssignedClients></NewAssignedClients>
            <AssignedClients></AssignedClients>
            <ClientAD></ClientAD>
            <ClientBlog></ClientBlog>
        </div>
    )
};