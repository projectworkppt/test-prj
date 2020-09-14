import { Component, OnInit } from '@angular/core';

import { NbDialogRef } from '@nebular/theme';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';


@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  flipped = false;

  //constructor() { }
  constructor(//protected ref: NbDialogRef<LoginComponent>, 
              //private fb: FormBuilder,
              //private router: Router, 
              private dialogService: NbDialogService 
              ) 
    {    
      var myDate = new Date();
    }

  ngOnInit(): void {
  }

  cancel() {
    //this.ref.close();
    null;
  }

  toggleView() {
    this.flipped = !this.flipped;
  }

}
