import { getSanityData, groqLinkType } from "./sanity";

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

export const mainNavigation = getNavigation("79fe02eb-35a4-40bd-ae80-15ef86d6245f");
