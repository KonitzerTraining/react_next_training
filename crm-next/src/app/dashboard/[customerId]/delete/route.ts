import { deleteById } from "@/services/customer.service";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function GET(request: Request, {params}: {params: {customerId: string}}) {
    await deleteById(params.customerId);

    revalidatePath('/dashboard');
    redirect('/dashboard');
}