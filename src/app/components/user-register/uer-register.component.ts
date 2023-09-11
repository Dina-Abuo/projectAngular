import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { existEmailValidtor } from 'src/app/CustomValidators/existEmail.validator';
import { passwordMatch } from 'src/app/CustomValidators/passwordMatch.validator';
import { IUser } from 'src/app/Modules/iuser';

@Component({
  selector: 'app-uer-register',
  templateUrl: './uer-register.component.html',
  styleUrls: ['./uer-register.component.scss']
})
export class UerRegisterComponent implements OnInit {

  userRegisterForm: FormGroup;
  existUserEmails: string[];
  constructor(private fd: FormBuilder) {
    //  call API to fill exist emails
    this.existUserEmails = ["aa@aa.com", "bb@bb.com", "dd@dd.com"];
    this.userRegisterForm = fd.group({
      fullName: [' ', [Validators.required, Validators.pattern('[A-Za-z]{3,}')]],
      email: ['', [Validators.required, existEmailValidtor(this.existUserEmails)]],
      phoneNo: fd.array(['']),
      address: fd.group({
        city: [''],
        postalCode: [''],
        street: ['']
      }),
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      referral: [''],
      referralOther: ['']
    }, { validators: passwordMatch() });
    // this.userRegisterForm = new FormGroup({
    //   fullName: new FormControl(' ',[Validators.required ,Validators.pattern('[A-Za-z],{3,}')]),
    //   email: new FormControl(' '),
    //   phoneNo: new FormControl(' '),
    //   address: new FormControl({
    //     city: new FormControl(''),
    //     postalCode: new FormControl(''),
    //     street: new FormControl('')
    //   }),
    //   password: new FormControl(''),
    //   confirmPassword: new FormControl(' '),
    //   // referral:
    // });
  }

  get fullName() {
    return this.userRegisterForm.get('fullName')
  }

  updateReferralValidators() {

    if (this.referral?.value == "Other") {
      this.userRegisterForm.get('referralOther')?.addValidators([Validators.required]);
    } else {

      this.userRegisterForm.get('referralOther')?.clearValidators();
    }
    this.userRegisterForm.get('referralOther')?.updateValueAndValidity();

  }

  submit() {
    // let userModel: IUser = this.userRegisterForm.value as IUser;
    let userModel: IUser = <IUser>this.userRegisterForm.value;
    // CallAPi ,send userModel
    console.log(userModel)
  }

  get phoneNumbers() {
    return this.userRegisterForm.get('phoneNo') as FormArray
  }

  get referral() {
    return this.userRegisterForm.get('referral')
  }

  get email() {
    return this.userRegisterForm.get('email')
  }

  get confirmPassword() {
    return this.userRegisterForm.get('confirmPassword')
  }
  get password() {
    return this.userRegisterForm.get('password')
  }

  addPhoneNo(event: any) {
    this.phoneNumbers.push(this.fd.control(''));
    event.target?.classList.add('d-none');
  }

  ngOnInit(): void {



    // check for path parms ,to specify user reg .or Edit profile
    // call API to get user Profile
    // this.userRegisterForm.setValue({// must provid all properties
    //   fullName: 'ITI',
    //   email: 'dina@gmail.com',
    //   address: {
    //     city: 'Qena',
    //     postaCode: 111,
    //     street: 'street1'
    //   }


    // this.userRegisterForm.patchValue({// can provide some properties
    //   fullName: 'ITI',
    //   email: 'dina@gmail.com',
    //   address: {
    //     city: 'Qena',
    //     postalCode: 11,
    //     street: 'street1'
    //   }
    // })
  }
}
