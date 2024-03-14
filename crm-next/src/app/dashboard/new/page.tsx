import { customerNewHandler } from "@/services/customer.service"
import SubmitButton from "@/app/_ui/submit-button"

export default function CustomerNewPage () {
    return (
        <>
            <h2 className="text-xl">New Customer</h2>
            <form action={customerNewHandler}>
                <div className="mb-4">
                    <label htmlFor="name" className="block">Name:</label>
                    <input id="name" name="name" className="border"></input>
                </div>
                <div className="mb-4">
                    <label htmlFor="volume" className="block">Volume:</label>
                    <input type="number" name="volume" min="0" id="volume" className="border"></input>
                </div>
                <div className="mb-4">
                    <SubmitButton></SubmitButton>
                 </div>
            </form>
        </>
    )
}