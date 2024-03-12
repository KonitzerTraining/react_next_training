import { useEffect, useState } from "react";
import CustomerTableComponent from "../components/customer-table.component";
import * as customerService from "../services/customer.service";

export default function CustomerListComponent() {

    const [searchExpression, setSearchExpression] = useState('');
    const [customers, setCustomers] = useState([]);

    const deleteCustomer = (id: number) => {
        customerService.deleteById(id).then(() => {
            loadCustomers();
        })
    }

    const loadCustomers = () => {
        customerService.getAll().then(({ data }) => {
            console.log(data);
            setCustomers(data);
        });
    }

    const filterCustomers = () => {
        customerService.filter(searchExpression).then(({data}) => {
            console.log('gefiltert');
            console.log(data);
            setCustomers(data);
        });
    }

    const searchHandler = (event: any) =>  {
        setSearchExpression(event.target.value);
    }

    useEffect(() => {
        loadCustomers();
    }, []); // }, [searchExpression]);

    useEffect(() => {
        filterCustomers();
    }, [searchExpression]); // }, [searchExpression]); 


    return (
        <>
            <h2>Customer List Component</h2>
            {/* JSON.stringify(customers) */}
            <div>
                <input type="search" name="value" onChange={searchHandler}/>
            </div>
            <CustomerTableComponent customers={customers} delete={deleteCustomer}></CustomerTableComponent>
        </>
    )
}