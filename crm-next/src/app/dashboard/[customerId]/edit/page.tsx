import * as customerService from "../../../../services/customer.service";

export default async function CustomerEditPage({params}: {params : {customerId: string}} ) {
    console.log(params);
    console.log('CustomerEditPage');
    
    const customer = await customerService.getById(params.customerId)
    console.log(customer);
    
    return (
     <>
      <h2>Customer Edit Page</h2>
    </>
    );
}