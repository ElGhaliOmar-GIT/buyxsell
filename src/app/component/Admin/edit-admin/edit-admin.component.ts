import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AdminService} from "../../../services/admin.service";
import {Admin} from "../../../models/admin";

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.scss']
})
export class EditAdminComponent implements OnInit {

  AdminForm: FormGroup;
  errorMessage: string;

  constructor(
    private formBuilder: FormBuilder,
    private AdminService: AdminService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.AdminForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required, Validators.pattern("[1-9][0-9]{8}")],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    }, { validators: this.matchingPasswordsValidator });
  }

  get firstName() { return this.AdminForm.get('fistName'); }
  get lastName() { return this.AdminForm.get('lastName'); }
  get phoneNumber() { return this.AdminForm.get('phoneNumber'); }
  get email() { return this.AdminForm.get('email'); }
  get password() { return this.AdminForm.get('password'); }
  get confirmPassword() { return this.AdminForm.get('confirmPassword'); }

  matchingPasswordsValidator(formGroup: FormGroup): null | { mismatch: boolean } {
    const password = formGroup.get('password');
    const confirmPassword = formGroup.get('confirmPassword');
    return password.value === confirmPassword.value ? null : { mismatch: true };
  }

  onSubmitForm(): void {
    const Admin: Admin = this.AdminForm.value;
    this.AdminService.addAdmin(Admin).subscribe(
      () => {
        this.router.navigate(['/list-Admin']);
      },
      error => {
        this.errorMessage = error.error.message;
      }
    );
  }

  onCancel() {
    this.router.navigate(['/list-Admin']);
  }

}
