import { mongoDB } from "../database/queryMongo";
import { UserServiceClass } from "../services/user.service";

class UserControllerClass extends UserServiceClass{
    public getUsers(req, res){
        const { id } = req.params;

        if(id){
            mongoDB.getOne("users", {_id: id}, (result) => {
                if(result.error){
                    return res.status(result.status).json({status: result.status, error: result.error});
                }
                
                return res.status(result.status).json({status: result.status, result});
            });
        }
    }

    public userDelete(req, res){
        // Code here...
    }
}

export const userController = new UserControllerClass();