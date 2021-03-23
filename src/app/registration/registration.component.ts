import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  formGroup: FormGroup;

  firstnameFormGroup: FormGroup;
  lastnameFormGroup:FormGroup;
  emailFormGroup: FormGroup;
  contactFormGroup:FormGroup;
  passwordFormGroup:FormGroup;
  confirmPasswordGroup:FormGroup;

  // steps = [
  //   {label: 'Confirm your name', content: 'Last name, First name.'},
  //   {label: 'Confirm your contact information', content: '123-456-7890'},
  //   {label: 'Confirm your address', content: '1600 Amphitheater Pkwy MTV'},
  //   {label: 'You are now done', content: 'Finished!'}
  // ];

  /** Returns a FormArray with the name 'formArray'. */
  get formArray(): AbstractControl | null { return this.formGroup.get('formArray'); }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      formArray: this.fb.array([
        this.fb.group({
          firstNameFormCtrl: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(16)]],
        }),
        this.fb.group({
          lastNameFormCtrl: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(16)]],
        }),
        this.fb.group({
          contactFormCtrl:['',[Validators.required,Validators.pattern('^[89]\d{7}')]]
        }),
        this.fb.group({
          passwordFormCtrl:['',Validators.required]
        }),
        this.fb.group({
          confirmPasswordFormCtrl:['',Validators.required]
        }),
        this.fb.group({
          emailFormCtrl: ['', Validators.email]
        }),
      ])
    });

    this.firstnameFormGroup = this.fb.group({
      firstNameFormCtrl: [''],
    });
    
    this.lastnameFormGroup = this.fb.group({
      lastNameFormCtrl: [''],
    });
    this.contactFormGroup = this.fb.group({
      contactFormCtrl: [''],
    });
    this.passwordFormGroup = this.fb.group({
      passwordNameCtrl: [''],
    });
    this.confirmPasswordGroup = this.fb.group({
      confirmPasswordFormCtrl: [''],
    });

    this.emailFormGroup = this.fb.group({
      emailCtrl: ['']
    });
  }

  submitForm(){
    console.log(this.formGroup.value.formArray);
  }

}
