import { Document, Schema, model, models } from "mongoose";

export interface User extends Document {
    clerkId: string,
    userName: string,
    email: string,
    firstName: string,
    lastName: string,
    imageUrl: string,
    role: 'owner' | 'user'| 'admin'
}



const UserSchema = new Schema<User>({
    clerkId: {type: String , required: true , unique: true },
    userName: {type: String, required: false, unique: true},
    email: {type: String, required: true, unique:true },
    firstName: {type: String, required:false},
    lastName: {type: String, required: false},
    imageUrl: {type: String, required: false},
    role: { enum:['owner', 'user', 'admin'], required: true, default:'user'}

})


const User = models.User || model<User>('User', UserSchema )


export default User;