import axios from 'axios'
import { toast } from 'react-toastify'


export const toggleHistoryRequest = function(id){
    axios
        .get(`${process.env.BACKEND_HOST}/api/v1/history/toggle?articleId=${id}`, { withCredentials: true })
        .then(res => res.data.message === '¡LISTO! lo eliminamos de tu historial' && toast.success(res.data.message))
        .catch(err => toast.error(err.response.data.message))
}