"use server"

import { auth } from '@/lib/auth'
import prisma from '@/lib/prisma'
import { z } from 'zod'
import {revalidatePath} from 'next/cache'

const formSchema = z.object({
    name: z.string().min(1, {message: "O nome do serviço é obrigatório"}),
    price: z.number().min(1, {message: "O preço do seviço é obrigatório"}),
    duration: z.number()
})

type formSchema = z.infer<typeof formSchema>

export async function editService(formData: formSchema) {
    const session = await auth();
    if(!session?.user?.id){
        return{
            error: "Falha ao editar serviço"
        }
    }

    const schema = formSchema.safeParse(formData);

    if(!schema.success){
        return {
            error: schema.error.issues[0].message
        }
    }

    try {

        const newService = await prisma.service.create({
            data: {
                name: formData.name,
                price: formData.price,
                duration: formData.duration,
                userId: session?.user?.id
            }
        })

        revalidatePath("/dashboard/services")

        return {
            data: newService
        }

    }catch(err){
         return{
            error: "Falha ao cadastrar serviço"
        }
    }
}