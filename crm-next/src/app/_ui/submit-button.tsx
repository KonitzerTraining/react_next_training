'use client'
import { useFormStatus } from "react-dom"

export default function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <button className="rounded bg-blue-500 p-1 text-white" disabled={pending}>{(pending) ? 'Please wait...' : 'Submit'}</button>
    )
}