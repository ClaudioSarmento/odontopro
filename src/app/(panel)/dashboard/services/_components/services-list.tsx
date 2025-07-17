"use client"
import { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {Plus} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { DialogService } from './dialog-service'
import { Service } from '../../../../../../generated/prisma'

interface ServicesListProps {
    services: Service[]
}

export function ServicesList({services} : ServicesListProps) {
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    return (
        <Dialog
            open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <section className='mx-auto'>

                <Card>
                    <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                        <CardTitle className='text-xl md:text-2xl font-bold'>Serviços</CardTitle>
                        <DialogTrigger asChild>
                            <Button>
                                <Plus className='w-4 h-4'/>
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                           <DialogService
                            closeModal={() => {
                                setIsDialogOpen(false);
                            }}
                           />
                        </DialogContent>
                    </CardHeader>
                    <CardContent>
                        <section className='space-y-4'>
                            {services.map(service => (
                                <article key={service.id}>
                                    
                                </article>
                            ))}
                        </section>
                    </CardContent>
                </Card>
            </section>
        </Dialog>
    )
}