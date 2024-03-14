'use client'

import SubmitButton from "@/app/_ui/submit-button";
import * as customerService from "@/services/customer.service";
import { customerEditHandler } from "@/services/customer.service";
import { useEffect, useState } from "react";

export default function CustomerEditPage({ params }: { params: { customerId: string } }) {

  const updateCustomer = customerEditHandler.bind(null, params.customerId);

  const [customer, setCustomer] = useState({
    name: '',
    volume: 0
  })

  useEffect(() => {
      customerService.getById(params.customerId).then((customer) => {
        setCustomer({
          name: customer.attributes.name,
          volume: customer.attributes.volume
        })
      })
    
  }, []);

  return (
    <>
      <h2 className="text-xl">Edit Customer with ID {params.customerId}</h2>
      <form action={updateCustomer}>
        <div className="mb-4">
          <label htmlFor="name" className="block">Name:</label>
          <input id="name" name="name" value={customer.name} onChange={(e) => {
            setCustomer( { 
              ...customer,
              name: e.target.value
            });
          }} className="border"></input>
        </div>
        <div className="mb-4">
          <label htmlFor="volume" className="block">Volume:</label>
          <input type="number"  value={customer.volume} onChange={(e) => {
            setCustomer( { 
              ...customer,
              volume: +e.target.value
            });
          }}  name="volume" min="0" id="volume" className="border"></input>
        </div>
        <div className="mb-4">
          <SubmitButton></SubmitButton>
        </div>
      </form>
    </>
  );
}