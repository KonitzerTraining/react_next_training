import type { Customer } from "../model/customer"
export default function CustomerTableComponent({ customers }: { customers: Customer[] }) {

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
                    {customers.map((customer: Customer) => {
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