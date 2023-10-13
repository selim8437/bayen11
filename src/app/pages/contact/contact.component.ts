import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import { Client } from 'src/app/code/client';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
	constructor(private http:HttpClient){}
	
  clients: Client[] = [];
  separateDialCode = false;
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
  preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
  phoneForm = new FormGroup({
	  phone: new FormControl(undefined, [Validators.required])
  });
  clientForm = new FormGroup({
    Name: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z]{4,11}")]),
    firstName: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z]{4,11}")]),
    email: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z]{4,11}")]),
  });
  combinedForm = new FormGroup({
    client1: this.clientForm,
    client2: this.phoneForm
  });
 
  ngOnInit(): void {}

	
   phone= this.phoneForm.controls.phone.value;
    
   
  
   
    
   
  
  
}