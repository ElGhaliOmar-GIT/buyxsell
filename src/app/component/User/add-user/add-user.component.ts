import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../services/user.service";
import {Router} from "@angular/router";
import {User} from "../../../models/user";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})

export class AddUserComponent implements OnInit {

  userForm: FormGroup;
  errorMessage: string;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required, Validators.pattern("[1-9][0-9]{8}")],
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    }, { validators: this.matchingPasswordsValidator });
  }

  get firstName() { return this.userForm.get('fistName'); }
  get lastName() { return this.userForm.get('lastName'); }
  get phoneNumber() { return this.userForm.get('phoneNumber'); }
  get username() { return this.userForm.get('username'); }
  get password() { return this.userForm.get('password'); }
  get confirmPassword() { return this.userForm.get('confirmPassword'); }

  matchingPasswordsValidator(formGroup: FormGroup): null | { mismatch: boolean } {
    const password = formGroup.get('password');
    const confirmPassword = formGroup.get('confirmPassword');
    return password.value === confirmPassword.value ? null : { mismatch: true };
  }

  onSubmitForm(): void {
    const user: User = this.userForm.value;
    this.userService.addUser(user).subscribe(
      () => {
        this.router.navigate(['/list-user']);
        console.log("aaa" , user)
      },
      error => {
        this.errorMessage = error.error.message;
      }
    );
  }

  onCancel() {
    this.router.navigate(['/list-user']);
  }

}
