
import Link from "next/link";
import CustomerTable from "../_ui/customer-table";
import * as customerService from "../../services/customer.service";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";


export default async function CustomersPage() {
    const customers = await customerService.getAllCustomers();
    console.log('Customers');

    const session = await getServerSession();
    
    console.log({session});
    if(session === null) {
        redirect('/api/auth/signin');
    }

    return (
        <>

<div className="my-4">
    <Link href='dashboard/new'>
        <button className="rounded bg-blue-500 p-1 text-white">New</button>
    </Link>
</div>

            <h2 className="text-lg">Customer List</h2>
          {/*   <pre>{JSON.stringify(customers)}</pre> */}
            
            <CustomerTable customers={customers}></CustomerTable>
        </>
    );
}