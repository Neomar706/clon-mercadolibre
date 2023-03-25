

export const withCleanUrl = function(url){
    const localUrl = url
    const output = new URLSearchParams(localUrl)
    const entriesMap = new Map(output.entries())
    const newUrl = new URLSearchParams(entriesMap)
    return '?' + newUrl.toString()
}