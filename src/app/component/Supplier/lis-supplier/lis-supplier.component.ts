import {Component, OnInit} from '@angular/core';
import {Supplier} from "../../../models/supplier";
import {SupplierService} from "../../../services/supplier.service";

@Component({
  selector: 'app-lis-supplier',
  templateUrl: './lis-supplier.component.html',
  styleUrls: ['./lis-supplier.component.scss']
})
export class LisSupplierComponent implements OnInit {

  suppliers: Supplier[] = [];

  constructor(private supplierService: SupplierService) { }

  ngOnInit(): void {
    this.getSuppliers();
  }

  getSuppliers(): void {
    this.supplierService.getAllSuppliers().subscribe(suppliers => {
      this.suppliers = suppliers;
    });
  }

  deleteSupplier(supplierId: number): void {
    this.supplierService.deleteSupplier(supplierId).subscribe(() => {
      this.getSuppliers();
    });
  }
}
