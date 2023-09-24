export class Client{
name  :String ;
lastName :String ;
email : String ;
phoneNumber :Number ;
public constructor(){
    this.name="" ;
    this.lastName="" ;
    this.email="";
    this.phoneNumber=0 ;
}
public setname(name:String){
    this.name=name ;
}
public setLname(lastname:String){
    this.lastName=lastname ;
}
public setemail(email:String){
    this.email=email ;
}
public setphoneNumber(name:String){
    this.name=name ;
}
public getname(){
    return this.name;
}
public getLname(){
    return this.lastName ;
}
public getemail(){
    return this.email ;
}
public getphoneNumber(){
    return this.name ;
}

}