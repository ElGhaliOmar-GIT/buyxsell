import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-add-shop',
  templateUrl: './add-shop.component.html',
  styleUrls: ['./add-shop.component.scss']
})
export class AddShopComponent {

  shopForm!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private shopService: ShopService
  ) { }

  ngOnInit(): void {
    this.shopForm = this.formBuilder.group({
      name: ['',[ Validators.required , Validators.minLength(4), Validators.maxLength(20)]],
      address: ['', Validators.required],
      photo: ['']
    });
  }
  get name() { return this.shopForm.get('name'); }
  get address() { return this.shopForm.get('address'); }

  // convenience getter for easy access to form fields
  get f() { return this.shopForm.controls; }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.shopForm.invalid) {
      return;
    }

    this.shopService.addShop(this.shopForm.value).subscribe(() => {
      this.router.navigate(['/list-shops']);
    });
  }

  onCancel() {
    this.router.navigate(['/list-shops']);
  }
}
