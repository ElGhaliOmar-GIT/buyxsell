import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AdminService} from "../../../services/admin.service";
import {Admin} from "../../../models/admin";

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.scss']
})
export class AddAdminComponent implements OnInit {

  adminForm: FormGroup;
  errorMessage: string;

  constructor(
    private formBuilder: FormBuilder,
    private adminService: AdminService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.adminForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required, Validators.pattern("[1-9][0-9]{8}")],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    }, { validators: this.matchingPasswordsValidator });
  }

  get firstName() { return this.adminForm.get('fistName'); }
  get lastName() { return this.adminForm.get('lastName'); }
  get phoneNumber() { return this.adminForm.get('phoneNumber'); }
  get email() { return this.adminForm.get('email'); }
  get password() { return this.adminForm.get('password'); }
  get confirmPassword() { return this.adminForm.get('confirmPassword'); }

  matchingPasswordsValidator(formGroup: FormGroup): null | { mismatch: boolean } {
    const password = formGroup.get('password');
    const confirmPassword = formGroup.get('confirmPassword');
    return password.value === confirmPassword.value ? null : { mismatch: true };
  }

  onSubmitForm(): void {
    const admin: Admin = this.adminForm.value;
    this.adminService.addAdmin(admin).subscribe(
      () => {
        this.router.navigate(['/list-admin']);
      },
      error => {
        this.errorMessage = error.error.message;
      }
    );
  }

  onCancel() {
    this.router.navigate(['/list-admin']);
  }

}
