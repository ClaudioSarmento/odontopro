import getSession from "@/lib/getSession"
import { redirect } from 'next/navigation'
import { getUserData } from "./_data-access/get-info-user"
import { ProfileContent } from "./_components/profile"
import { Subscription, User }  from '../../../../../generated/prisma';


interface ProfileContentProps {
  user: User & {
    subscription: Subscription;
  };
}

export default async function Profile() {
    const session = await getSession()
    if (!session) {
        redirect("/")
    }

    const user = await getUserData({userId: session.user?.id}) 

    if (!user) {
        redirect("/")
    }

    return (
        <section>
            <ProfileContent user={user as any}/>
        </section>
    )
}