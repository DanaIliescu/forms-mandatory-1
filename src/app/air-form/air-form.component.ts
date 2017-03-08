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
      arrivalCity: ['', Validators.required],
      departureDate: ['', Validators.required],
      arrivalDate: ['', Validators.required]
    });
  }

}
