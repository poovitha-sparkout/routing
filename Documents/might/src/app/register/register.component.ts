import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Service } from '../service.service';
import { FormGroup, Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userForm !: FormGroup
  fb!:FormBuilder
  
  formData !: string;
  Service: any;
  service: any;
  registerUser !: FormGroup;
   
 constructor(private http: HttpClient,service: Service,formBuilder: FormBuilder){
    return 
  }
    
  ngOnInit(): void {
     this.registerUser = this.fb.group({
     
     })
      var user:any  = {
        name:['',Validators.required],
        'mailto:email':['',Validators.required],
        country_code: ['',Validators.required],
        phone_number: ['',Validators.required],
        password: ['',Validators.required],
        kyc_document: [
          'http://3.130.18.101/farmsent-assets/images/kyc/1681284376554/83b5009e040969ee7b60362ad74265731681284376554.png',
          'http://3.130.18.101/farmsent-assets/images/kyc/1681284376563/ea571676ce9b75b0730a5d56350ae93e1681284376563.png'
        ]
    
      }
        this.service.registerData(user).subscribe(
          (response: any) => {
            console.log('Success:', response);
          },
          (error: any) => {
            console.error('An error occurred:', error);
          }
        );
        }
        
    // $http.post('https://layeronex-backend.seaswap.co:3003/api/v1/developer/signup', user)
    //   .then(function(response: { data: any; }) {
    //     // Registration successful
    //     // registrationStatus = 'Registration successful';
    //     console.log('Registration successful', response.data);
    //   })
    //   .catch(function(error: any) {
    //     // Registration failed
    //     // vm.registrationStatus = 'Registration failed: ' + error.data.message;
    //     console.error('Registration failed', error);
    //   });
    
    
  
  }
