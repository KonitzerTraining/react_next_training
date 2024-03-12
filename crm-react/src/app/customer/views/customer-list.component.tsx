import { useEffect, useState } from "react";
import CustomerTableComponent from "../components/customer-table.component";
import * as customerService from "../services/customer.service";

export default function CustomerListComponent() {

    // const [searchExpression, setSearchExpression] = useState('');
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        customerService.getAll().then(({ data }) => {
            console.log(data);
            setCustomers(data);
        });
    }, []);
    return (
        <>
            <h2>Customer List Component</h2>
            {/* JSON.stringify(customers) */}

            <CustomerTableComponent customers={customers}></CustomerTableComponent>
        </>
    )
}