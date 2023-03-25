import { useLocation } from 'react-router-dom'


export const useQuery = function(){
    const location = useLocation()

    let obj = {}

    if(location?.search){
        location.search
            .split('?')[1]
            .split('&')
            .forEach(keyVal => obj[keyVal.split('=')[0]] = keyVal.split('=')[1])
    }

    return obj
}