import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,
  FormControl } from '@angular/forms';

@Component({
  selector: 'air-form',
  templateUrl: './air-form.component.html',
  styleUrls: ['./air-form.component.css']
})
export class AirFormComponent{
  mainForm: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.mainForm = formBuilder.group({
      'departureCity': ['', Validators.compose([Validators.required, this.cityValidator])],
      'destinationCity': ['', Validators.compose([Validators.required, this.cityValidator])],
      'twoWay': [false, Validators.required],
      'departureDate': ['', Validators.required],
      'returnDate': ['', ],
      'passengers': [1, Validators.required]
    });
  }

  // Create a bunch of custom validators
  // every city needs to start with a uppercase adn then contain just lowercase letters
  cityValidator(control: FormControl): {[s: string]: boolean}{
      if(!control.value.match(/^[A-Z]{1}[a-z]+([ ][A-Z]{1}[a-z]+)*$/)){
        return {invalidCity: true};
      }
      return null;
  }

  onSubmit(): void {
    if (this.mainForm.valid) {
      console.log("Tak");
    }else {
      console.log("the form is not valid!");
    }
    console.log("You submitted the value: ",this.mainForm.value);
  }

}
