

export const to = function(page){
    const pages = {
        puchases: '/account/puchases',
        history: '/account/history',
        publish: '/account/publish'
    }
    return pages[page]
}