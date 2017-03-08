import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,
  FormControl } from '@angular/forms';

@Component({
  selector: 'air-form',
  templateUrl: './air-form.component.html',
  styleUrls: ['./air-form.component.css']
})
export class AirFormComponent implements OnInit {
  private mainForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.mainForm = this.formBuilder.group({
      departureCity: ['', Validators.required],
      destinationCity: ['', Validators.required],
      twoWay: [false, Validators.required],
      departureDate: ['', Validators.required],
      returnDate: ['', ],
      passengers: [1, Validators.required]
    });
  }

  onSubmit(): void {
    if (this.mainForm.valid) {
      console.log("submitted", this.mainForm.value);
    }

    else console.log("the form is not valid!");
  }

}
