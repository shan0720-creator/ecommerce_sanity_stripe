import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


export const client  = sanityClient({
    projectId: 'a5h232nb',
    dataset: 'production',
    apiVersion: '2022-06-16',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});


const builder = imageUrlBuilder(client);
 export const urlFor = (source) => builder.image(source);

