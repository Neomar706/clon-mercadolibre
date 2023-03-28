import axios from 'axios'
import { toast } from 'react-toastify'


export const delete2HistoryRequest = function(id){
    axios
        .get(`${process.env.BACKEND_HOST}/api/v1/history/delete?articleId=${id}`, { withCredentials: true })
        .then(res => toast.success(res.data.message))
        .catch(err => toast.error(err.response.data.message))
}