import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {SupplierService} from "../../../services/supplier.service";
import {Supplier} from "../../../models/supplier";

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.scss']
})
export class AddSupplierComponent implements OnInit {

  supplierForm: FormGroup;
  errorMessage: string;

  constructor(
    private formBuilder: FormBuilder,
    private supplierService: SupplierService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.supplierForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required, Validators.pattern("[1-9][0-9]{8}")],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    }, { validators: this.matchingPasswordsValidator });
  }

  get firstName() { return this.supplierForm.get('fistName'); }
  get lastName() { return this.supplierForm.get('lastName'); }
  get phoneNumber() { return this.supplierForm.get('phoneNumber'); }
  get email() { return this.supplierForm.get('email'); }
  get password() { return this.supplierForm.get('password'); }
  get confirmPassword() { return this.supplierForm.get('confirmPassword'); }

  matchingPasswordsValidator(formGroup: FormGroup): null | { mismatch: boolean } {
    const password = formGroup.get('password');
    const confirmPassword = formGroup.get('confirmPassword');
    return password.value === confirmPassword.value ? null : { mismatch: true };
  }

  onSubmitForm(): void {
    const supplier: Supplier = this.supplierForm.value;
    this.supplierService.addSupplier(supplier).subscribe(
      () => {
        this.router.navigate(['/list-supplier']);
      },
      error => {
        this.errorMessage = error.error.message;
      }
    );
  }

  onCancel() {
    this.router.navigate(['/list-supplier']);
  }

}
