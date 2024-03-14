'use server'
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const url = 'http://localhost:1337/api/customers';

export const getById = async (id: string) => {
    try {
        const res = await fetch(`${url}/${id}`, {
          cache: "no-store",
          /* next: {
            revalidate: 0
           }  */
        });
        const resObj = await res.json();
        return resObj.data;
    } catch (error: any) {
        console.log('Fehler' + error.message);
    }
}

export const getAllCustomers = async () => {
    try {
        const res = await fetch(url, {
          cache: "no-store",
          /* next: {
            revalidate: 0
           }  */
        });
        const resObj = await res.json();
        return resObj.data;
    } catch (error: any) {
        console.log('Fehler' + error.message);
    }
}

export const customerNewHandler = async (formData: FormData) => {
    'use server'

    const customer = {
        data: {
            name: formData.get('name'),
            volume: +(formData.get('volume') as string),
        }
    };
    console.log(customer);

    const res = await fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(customer),
    });

    const resObj = await res.json();
    console.log(resObj);
    revalidatePath('/dashboard');
    redirect('/dashboard');
}

export const customerEditHandler = async (id: string, formData: FormData) => {
    'use server'

    console.log(id);
    const customer = {
        data: {
            name: formData.get('name'),
            volume: +(formData.get('volume') as string),
        }
    };
    console.log(customer);

     const res = await fetch(`${url}/${id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(customer),
    });

    const resObj = await res.json();
    console.log(resObj);
    revalidatePath('/dashboard');
    redirect('/dashboard');
 
}

