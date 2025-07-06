import { getAllServices } from "../_data-access/get-all-services";

interface ServicesContentProps{
    userId: string;
}

export async function ServicesContent({userId}: ServicesContentProps){

    const services = await getAllServices({userId: userId});

    return(
        <div>
            TODOS OS MEUS SERVIÇOS
        </div>
    )
}