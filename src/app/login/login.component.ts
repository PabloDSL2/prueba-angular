import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  userEmail: string = '';
  buttonDisabled: boolean = false;
  token: string = '';
  constructor(
    private formBuilder: FormBuilder, 
    private toast: ToastrService,
    private apiService: ApiService,
    ){
    this.form = this.formBuilder.group({
      email: [''],
      password: ['']
    })
  }
  
  ngOnInit(): void {
  }

  login(){
    if(this.form.value){
      this.buttonDisabled = true;
      this.apiService.login(this.form.value).subscribe({
        next: (response) => {
          console.log(response);
          this.userEmail = this.form.get(['email'])?.value;
          this.token = response.token;
        },
        error: (error) => {
          this.buttonDisabled = false;
          console.log(error);
          this.toast.error(error.error.error, 'Error', {
            timeOut: 5000
          })
        },
      })
    }
    
  }

}
