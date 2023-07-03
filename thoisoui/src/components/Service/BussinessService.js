import { instance } from "../../config/axiosConfig"
class BussinessService {

    // size
    getAllSize(){
        return instance.get('/Size/getAll')
    }
    putSize(id,size){
        return instance.put(`Size/update/${id}`,size)
    }
}

export default new BussinessService()