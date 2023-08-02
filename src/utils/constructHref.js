export default function constructHref(linkObj) {
    function buildPageSlug(page) {
        return page.sectionSlug ? page.href.full : page.href.current
    }

    if (linkObj.type === 'page') {
        return `/${buildPageSlug(linkObj)}`
    } else if (linkObj.type === 'slugString') {
        return `/${linkObj.href}`
    } else if (linkObj.type === 'externalLink') {
        return linkObj.href
    }
}