const register = async (formData: any) => {
    'use server'
    console.log(formData.get('password'));
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