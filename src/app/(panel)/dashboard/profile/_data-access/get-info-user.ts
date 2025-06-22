"use server"
import prisma from "@/lib/prisma";
import { use } from "react";

interface GetUserDataProps {
    userId: string;
}
export async function getUserData({ userId }: GetUserDataProps) {
    try {
        if (!userId) {
            return null;
        }
        const user = await prisma.user.findFirst({
            where: {
                id: userId
            },
            include: {
                subscription: true,
            }
        })

        if (!user) {
            return null;
        }

        return user;

    } catch (err) {
        return null;
    }
}