import { User } from "../../../entities/User";

export function mapUserToUserDTO(user: User){
    return {id : user.id, username : user.username};
}