import { Injectable } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  loginForm: FormGroup;
  validation_message = {
    email: [
      { type: "required", message: "El Email es Obligatorio" },
      { type: "pattern", message: "Tu email no es valido" }
    ]
  }

  errorMessage: any;

  constructor(private formBuilder: FormBuilder, 
    
    ) { 

    this.loginForm = this.formBuilder.group({
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
        ])
      ),
      password: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(5)
        ])
      )
    });
  }

  ngOnInit() {
  }

  loginUser(credentials: any) {
    console.log(credentials);
   return new Promise((accept,reject)=>{
    if(credentials.email=="alexavar2003@gmail.com"&&credentials.password=="123456")
   {accept("login Exitoso")

      }else{
        reject("login Fallido");

      }
   })

  }

  


}
