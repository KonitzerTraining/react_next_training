import CustomerTableComponent from "../components/customer-table.component";
import * as customerService from "../services/customer.service";

export default function CustomerListComponent() {

    customerService.getAll().then(({data}) => {
        console.log(data);
    });

    return (
        <>
       <h2>Customer List Component</h2>
       <CustomerTableComponent customers={[]}></CustomerTableComponent>
       </>
    )
}