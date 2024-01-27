import {createClient} from 'next-sanity'
import  ImageUrlBuilder  from '@sanity/image-url'
export const client =createClient({
    projectId:"8llly0e1",
    dataset:"production",
    apiVersion:'2024-02-02',
    useCdn:true,
})

const builder=ImageUrlBuilder(client)

export function urlFor(source: any){
    return builder.image(source)
}