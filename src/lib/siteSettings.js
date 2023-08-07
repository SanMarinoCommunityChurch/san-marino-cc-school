import { getSanityData } from "./sanity";

export const siteSettings = await getSanityData(`*[_type == 'siteSettings'][0]{
    siteName,
    siteDescription,
    siteHeader,
    socialLinks[],
    "defaultOgImage": defaultOgImage{
        ...,
        asset->
    },
    "logo": logo{
        ...,
        asset->
    }
}`)