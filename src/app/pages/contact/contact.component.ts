import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import { Client } from 'src/app/code/client';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
	
	
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
  ngOnInit(): void {}

  afficherTout(): void {
	const phoneNumber = this.phoneForm.controls.phone ?.value;

	if (phoneNumber !== null && phoneNumber !== undefined) {
  	
	  const formValues = this.clientForm.value;
	  const client: Client = new Client( formValues.Name||"",
	  formValues.firstName||"",
	  formValues.email||"",
	  phoneNumber['internationalNumber'] ,formValues.message||"")
	  this.clients.push(client);
	  console.log(this.clients[0])
	  alert("Message succesfully sent !")
	} else {
 
  	console.error('Phone number is not available.');
	}
	
      
	

  }
  
  getname(): AbstractControl { return this.clientForm.get('name') as AbstractControl; }
  getfirstName(): AbstractControl { return this.clientForm.get('firstName') as AbstractControl; }
  getemail(): AbstractControl { return this.clientForm.get('email') as AbstractControl; } 

  
}