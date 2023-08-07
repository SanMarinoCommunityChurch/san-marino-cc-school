import { getSanityData, groqLinkType } from "./sanity";

export const posts = await getSanityData(`*[_type == 'post']|order(publishDate desc){
    "slug": slug.current,
    name,
    preview,
    publishDate,
    category->{
      name,
      "slug": slug.current,
    },
    "image": image{
      ...,
      asset->
    },
    "portableText": content.content[]{
        ...,
        markDefs[]{
          ...,
          _type == "internalLink" => {
            "linkItem": {
              "type": @.reference->_type,
              "sectionSlug": @.reference->sectionSlug,
              "href": @.reference->slug{
                current,
                "full": fullUrl
              }
            }
          }
        },
        _type == "image" => {
          ...,
          asset->
        },
        _type == 'youtube' => {
          ...,
        },
        _type == 'table' => {
          "type": _type,
          title,
          rows[]{
            header,
            "entries": item[]
          }
        },
    },
    cta{
      heading,
      text,
      accent,
      "image": image{
        ...,
        asset->
      },
    "linkItem": link{
        ${groqLinkType}
    }
    }
}`)

export const categories = await getSanityData(`*[_type == 'postType']{
    name,
    "slug": slug.current
}`)