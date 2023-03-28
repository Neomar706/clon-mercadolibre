import axios from 'axios'
import { toast } from 'react-toastify'


export const add2HistoryRequest = async function(id){
    await axios
        .get(`${process.env.BACKEND_HOST}/api/v1/history/add?articleId=${id}`, { withCredentials: true })
        // .then(res => res.data.message === '¡LISTO! lo eliminamos de tu historial' && toast.success(res.data.message))
        // .catch(err => toast.error(err.response.data.message))
}