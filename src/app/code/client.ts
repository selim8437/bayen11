export class Client{
name  :String ;
firstName :String ;
email : String ;
phoneNumber :Number ;
message :String ;
public constructor(name:String,firstName:String ,email:String ,phoneNumber :Number,message :String){
    this.name=name ;
    this.firstName=firstName ;
    this.email=email;
    this.phoneNumber=phoneNumber ;
    this.message=message ;
}
public setname(name:String){
    this.name=name ;
}
public setLname(lastname:String){
    this.firstName=lastname ;
}
public setemail(email:String){
    this.email=email ;
}
public setphoneNumber(name:String){
    this.name=name ;
}
public setmessage(message:String){
    this.message=message ;
}
public getname(){
    return this.name;
}
public getmessage(){
    return this.message;
}
public getLname(){
    return this.firstName ;
}
public getemail(){
    return this.email ;
}
public getphoneNumber(){
    return this.name ;
}

}