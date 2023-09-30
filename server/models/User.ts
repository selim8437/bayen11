export class User {
name :string ;
firstName :string;
email :string ;
password :string ;

constructor(name :string ,firstName :string ,email:string ,password :string ){
    this.name=name ;
    this.firstName=firstName ;
    this.email=email ;
    this.password=password ;
}

public getName (){
    return this.name  ;

}public getFirstname (){
    return this.firstName  ;

}public getEmail (){
    return this.email  ;

}public getPassword (){
    return this.password  ;

}
public setName (name :string){
     this.name  =name;

}public setFirstname (fn :string ){
     this.firstName=fn  ;

}public setEmail (email :string){
     this.email =email ;

}public setPassword (ps:string){
     this.password=ps  ;

}


}