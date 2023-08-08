import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const sanityClient = createClient({
  projectId: "rnhp93wy",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-04-11",
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source) {
  if (source) {
    return builder.image(source);
  } else {
    return;
  }
}

export async function getSanityData(groqQuery) {
  const data = await sanityClient.fetch(groqQuery);
  return data;
}

export const groqLinkType = `_type == 'link' => {
  "type": _type,
  "linkName": name,
  "link": href[0]{
    _type == 'pageRef' => @-> {
      "pageId": _id,
      "type": _type,
      "pageName": name,
      sectionSlug,
      "href": slug{
        current,
        "full": fullUrl
      }
    },
    _type == 'slugString' => {
      "type": _type,
      "href": slug
    },
    _type == 'externalLink' => {
      "type": _type,
      "href": url
    }
  }
}`
