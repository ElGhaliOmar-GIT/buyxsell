import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {SupplierService} from "../../../services/supplier.service";
import {Supplier} from "../../../models/supplier";

@Component({
  selector: 'app-edit-supplier',
  templateUrl: './edit-supplier.component.html',
  styleUrls: ['./edit-supplier.component.scss']
})
export class EditSupplierComponent implements OnInit {

  supplierForm: FormGroup;
  errorMessage: string;
  supplier: Supplier;

  constructor(
    private formBuilder: FormBuilder,
    private supplierService: SupplierService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = + this.route.snapshot.paramMap.get('id');
    this.supplierService.getSupplierById(id).subscribe((supplier) => {
      this.supplier = supplier;
    });
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
    this.supplierService.updateSupplier(this.supplierForm.value, this.supplier.id).subscribe(() => {
      this.onCancel();
    }, (error) => {
      console.error('Error updating user: ', error);
    });
  }

  onCancel() {
    this.router.navigate(['/list-supplier']);
  }

}{

}
