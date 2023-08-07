import { getSanityData } from "./sanity";

export const testimonials = await getSanityData(`*[_type == 'testimonial']|order(title asc)`)