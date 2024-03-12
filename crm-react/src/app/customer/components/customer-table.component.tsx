export default function CustomerTableComponent(props: any) {
    console.log(props);
    return (
        <>
            <table className="table-auto">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Volume</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {props.customers.map((customer: any) => {
                        return (
                            <tr key={customer.id}>
                                <td>{customer.id}</td>
                                <td>{customer.attributes.name}</td>
                                <td>{customer.attributes.volume}</td>
                                <td>
                                    <button onClick={() => {
                                        props.delete(customer.id);
                                    }}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}