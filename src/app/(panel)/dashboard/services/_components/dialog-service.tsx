"use client"

import { DialogHeader } from "@/components/ui/dialog"
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog"

export function DialogService(){
    return(
        <>
            <DialogHeader>
                <DialogTitle>Novo Serviço</DialogTitle>
                <DialogDescription>
                    Adicione um novo serviço
                </DialogDescription>
            </DialogHeader>

            <div>
                <h1>
                    CONTEUDO DO MODAL
                </h1>
            </div>
        </>
    )
}