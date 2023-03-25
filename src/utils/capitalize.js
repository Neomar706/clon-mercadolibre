

export const capitalize = function(text){
    const txt = decodeURIComponent(text)
    return txt[0].toUpperCase() + txt.slice(1)
}