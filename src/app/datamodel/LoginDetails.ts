export class LoginDetails {
    username: String;
    password :String;
   

    build(username: String, password : String ){
        let tmp  = new LoginDetails;
        tmp.username = username;
        this.password = password;
        return tmp;
    }
    // constructor(inputUsername : String , inputPassword : String ) {
    //     this.username = inputUsername;
    //     this.password = inputPassword;
    // }
}