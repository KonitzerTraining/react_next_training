import { hash } from 'bcrypt';

export async function hashPassword(password: string) {
    const hashedPassword = await hash(password, 12);
    return hashedPassword;
  }

const register = async (formData: any) => {
    'use server'
    const hashedPassword = await hashPassword(formData.get('password'));

    const newProfile = {
        "data": {
            "name": formData.get('name'),
            "email": formData.get('email'),
            "password": hashedPassword
        }
      }
    
      console.log(newProfile);

      const response = await fetch('http://localhost:1337/api/profiles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProfile),
      });
    
      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        console.error('Failed to register');
      }
}

export default function RegisterPage() {
    return (
      <>
        <h2 className="text-3xl">Register</h2>
  
        <form action={register}>
        <div>
            <label className="block" htmlFor="name">Name</label>
            <input className="border border-black" type="text" id="name" name="name" />
          </div>
          <div>
            <label className="block" htmlFor="email">Email</label>
            <input className="border border-black" type="text" id="email" name="email" />
          </div>
          <div>
            <label className="block" htmlFor="password">Password</label>
            <input className="border border-black" name="password" type="password" id="password" />
          </div>
  
          <div className="my-4">
            <button className="p-1 bg-blue-400 text-white" type="submit">Register</button>
          </div>
        </form>
  
      </>
    );
  }