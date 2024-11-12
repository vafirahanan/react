import React from 'react';

const Usertable = ({ data }) => {
    return (
        <div>
            <table border={1} style={{ border: '3px solid black', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>E-mail</th>
                        <th>City</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((ele) => (
                            <tr key={ele.id}>
                                <td>{ele.id}</td>
                                <td>{ele.name}</td>
                                <td>{ele.username}</td>
                                <td>{ele.email}</td>
                                <td>{ele.address.city}</td>
                                <td>{ele.company.name}</td>

                            </tr>

                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Usertable;


