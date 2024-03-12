export default function CustomerTableComponent({customers}: any) {

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
                    {customers.map((customer: any) => {
                        return (
                            <tr key={customer.id}>
                                <td>{customer.id}</td>
                                <td>{customer.name}</td>
                                <td>{customer.volume}</td>
                                <td></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}