import { getSanityData, groqLinkType } from "./sanity";

// const groqLinkType = `_type == 'link' => {
//   "type": _type,
//   "linkName": name,
//   "link": href[0]{
//     _type == 'pageRef' => @-> {
//       "type": _type,
//       "pageName": name,
//       sectionSlug,
//       "href": slug{
//         current,
//         "full": fullUrl
//       }
//     },
//     _type == 'slugString' => {
//       "type": _type,
//       "href": slug
//     },
//     _type == 'externalLink' => {
//       "type": _type,
//       "href": url
//     }
//   }
// }`

export const navigation = await getSanityData(`*[_type == 'navigation'] {
  _id,
  name,
    entries[]{
      _type == 'navigationSection' => {
        "type": _type,
        "sectionName": name,
        "sectionLinks": pages[]{
          ${groqLinkType}
        }
      },
    ${groqLinkType}
  }
}`);

export function getNavigation(id) {
  return navigation.find((item) => item._id === id);
}
