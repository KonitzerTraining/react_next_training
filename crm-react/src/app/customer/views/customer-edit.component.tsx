import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import * as customerService from "../services/customer.service";

export default function CustomerEditComponent() {

    let { id } = useParams();
    useEffect(() => {
        loadCustomer();
    }, []);

    let [customer, setCustomer] = useState<any>(null);

    const loadCustomer = () => {
        customerService.getById(id).then((customer) => {
            console.log(customer);
            setCustomer(customer.data.attributes);
        })
    }

    const formHandler = (event: any) => {
        event.preventDefault();
        console.log(customer);
    }
    
    return (
        <>
            <h2>Edit Customer with ID {id}</h2>
            {customer && (
                <>
                <form onSubmit={formHandler}>
                    <div className="mb-2">
                        <input type="text" name="name" className="border-black border" value={customer.name} onChange={(event) => {
                            setCustomer({
                                ...customer,
                                name: event.target.value
                            })
                        }}/>
                    </div>
                    <div className="mb-2">
                        <input type="number" name="volume" className="border-black border" value={customer.volume}   onChange={(event) => {
                            setCustomer({
                                ...customer,
                                volume: +event.target.value
                            })
                            
                        }}/>
                    </div>
                    <button className="border border-black">Submit</button>
                    </form>
                </>
            )}
        </>
    )
}