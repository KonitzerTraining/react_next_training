export default function CustomerTable(props: any) {
    console.log(props);
    return (
        <>
            <table className="w-full my-4 border-neutral-400">
                <thead>
                    <tr className="align-bottom">
                        <th className="text-left">#</th>
                        <th className="text-left">Name</th>
                        <th className="text-left">Volume</th>
                        <th className="text-left"></th>
                    </tr>
                </thead> 
                <tbody>
                    {props.customers.map((customer: any) => {
                        return (
                            <tr className="border-b border-1" key={customer.id}>
                                <td>{customer.id}</td>
                                <td>{customer.attributes.name}</td>
                                <td className="text-right">{customer.attributes.volume}</td>
                                <td>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}