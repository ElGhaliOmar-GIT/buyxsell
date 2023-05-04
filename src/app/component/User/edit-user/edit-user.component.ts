import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../../models/user";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  userForm: FormGroup;
  errorMessage: string;
  user:User;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
  private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = + this.route.snapshot.paramMap.get('id');
    this.userService.getUserById(id).subscribe((user) => {
      this.user = user;
      console.log("user-edit" ,this.user )
    });
    this.initForm();
  }

  initForm(): void {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required, Validators.pattern("[1-9][0-9]{8}")],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    }, { validators: this.matchingPasswordsValidator });
  }

  get firstName() { return this.userForm.get('fistName'); }
  get lastName() { return this.userForm.get('lastName'); }
  get phoneNumber() { return this.userForm.get('phoneNumber'); }
  get email() { return this.userForm.get('email'); }
  get password() { return this.userForm.get('password'); }
  get confirmPassword() { return this.userForm.get('confirmPassword'); }

  matchingPasswordsValidator(formGroup: FormGroup): null | { mismatch: boolean } {
    const password = formGroup.get('password');
    const confirmPassword = formGroup.get('confirmPassword');
    return password.value === confirmPassword.value ? null : { mismatch: true };
  }

  onSubmitForm(): void {
    this.userService.updateUser(this.userForm.value).subscribe(() => {
      console.log('user updated successfully');
      console.log(this.userForm.value)
      this.onCancel();
    }, (error) => {
      console.error('Error updating user: ', error);
    });
  }

  onCancel() {
    this.router.navigate(['/list-user']);
  }

}
