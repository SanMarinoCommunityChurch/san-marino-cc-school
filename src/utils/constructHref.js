export default function constructHref(linkObj) {
  function buildPageSlug(page) {
    return page.sectionSlug ? page.href.full : page.href.current;
  }

  if (linkObj.type === "page") {
    return `/${buildPageSlug(linkObj)}`;
  } else if (linkObj.type === "slugString") {
    if (linkObj.href[0] === "#") {
      return `${linkObj.href}`;
    } else {
      return `/${linkObj.href}`;
    }
  } else if (linkObj.type === "externalLink") {
    return linkObj.href;
  }
}
