import { Component } from '@angular/core';
import { Produit } from 'src/app/models/produit';
import { ProduitService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent  {
  product : Produit = new Produit() ;

  // image!: File ;

  constructor(private produitService: ProduitService) { }

  saveProduit(){
    this.product;
    console.log(this.product)
    this.produitService.addProduct(this.product).subscribe(
      data => {
        console.log(data)

      },error => console.log(error)
      );



  // onFileSelected(event: Event) {
  //   const target = event.target as HTMLInputElement;

  //   // Do something with the selected files...
  // }


}
}
