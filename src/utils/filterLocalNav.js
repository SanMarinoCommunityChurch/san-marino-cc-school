export default function filterLocalNav(pageId, navigation) {
    const sections = navigation.entries.filter(({ type }) => type === 'navigationSection');

    return sections.find((section) => {
        return section.sectionLinks.find(({ link }) => {
            return (link.type === 'page' && link.pageId === pageId)
        })
    })
}