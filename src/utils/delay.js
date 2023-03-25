

export const delay = function(time){
    return new Promise((resolve, _) => {
        setTimeout(() => resolve(), time)
    })
}