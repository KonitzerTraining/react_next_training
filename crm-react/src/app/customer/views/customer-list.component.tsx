import CustomerTableComponent from "../components/customer-table.component";

export default function CustomerListComponent() {
    return (
        <>
       <h2>Customer List Component</h2>
       <CustomerTableComponent customers={[]}></CustomerTableComponent>
       </>
    )
}