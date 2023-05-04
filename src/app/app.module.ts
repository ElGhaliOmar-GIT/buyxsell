import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './component/product/product-list/productList.component';
import { AddProductComponent } from './component/product/add-product/add-product.component';
import { EditProductComponent } from './component/product/edit-product/edit-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddBblogComponent } from './component/blog/add-bblog/add-bblog.component';
import { EditBblogComponent } from './component/blog/edit-bblog/edit-bblog.component';
import { ListBblogComponent } from './component/blog/list-bblog/list-bblog.component';
import { AddCategoryComponent } from './component/category/add-category/add-category.component';
import { EditCategoryComponent } from './component/category/edit-category/edit-category.component';
import { ListCategoryComponent } from './component/category/list-category/list-category.component';
import { AddShopComponent } from './component/shop/add-shop/add-shop.component';
import { EditShopComponent } from './component/shop/edit-shop/edit-shop.component';
import { ListShopComponent } from './component/shop/list-shop/list-shop.component';
import { AddCartsComponent } from './component/carts/add-carts/add-carts.component';
import { EditCartsComponent } from './component/carts/edit-carts/edit-carts.component';
import { ListCartsComponent } from './component/carts/list-carts/list-carts.component';
import { ListChatComponent } from './component/chat/list-chat/list-chat.component';
import { AddChatComponent } from './component/chat/add-chat/add-chat.component';
import { EditChatComponent } from './component/chat/edit-chat/edit-chat.component';
import { EditClaimComponent } from './component/claim/edit-claim/edit-claim.component';
import { AddClaimComponent } from './component/claim/add-claim/add-claim.component';
import { EditClientComponent } from './component/client/edit-client/edit-client.component';
import { AddClientComponent } from './component/client/add-client/add-client.component';
import { ListClientComponent } from './component/client/list-client/list-client.component';
import { EditCammandLineComponent } from './component/Cammand_line/edit-cammand-line/edit-cammand-line.component';
import { AddCammandLineComponent } from './component/Cammand_line/add-cammand-line/add-cammand-line.component';
import { ListCommentComponent } from './component/Comment/list-comment/list-comment.component';
import { EditCommentoComponent } from './component/Comment/edit-commento/edit-commento.component';
import { AddCommentComponent } from './component/Comment/add-comment/add-comment.component';
import { ListCurrencyComponent } from './component/Currency/list-currency/list-currency.component';
import { EditCurrencyComponent } from './component/Currency/edit-currency/edit-currency.component';
import { AddCurrencyComponent } from './component/Currency/add-currency/add-currency.component';
import { ListDelivererComponent } from './component/Deliverer/list-deliverer/list-deliverer.component';
import { EditDelivererComponent } from './component/Deliverer/edit-deliverer/edit-deliverer.component';
import { AddDelivererComponent } from './component/Deliverer/add-deliverer/add-deliverer.component';
import { ListDeliveryComponent } from './component/Delivery/list-delivery/list-delivery.component';
import { EditDeliveryComponent } from './component/Delivery/edit-delivery/edit-delivery.component';
import { AddDeliveryComponent } from './component/Delivery/add-delivery/add-delivery.component';
import { ListFavoriteComponent } from './component/Favorite/list-favorite/list-favorite.component';
import { EditFavoriteComponent } from './component/Favorite/edit-favorite/edit-favorite.component';
import { AddFavoriteComponent } from './component/Favorite/add-favorite/add-favorite.component';
import { ListForumComponent } from './component/Forum/list-forum/list-forum.component';
import { EditForumComponent } from './component/Forum/edit-forum/edit-forum.component';
import { AddForumComponent } from './component/Forum/add-forum/add-forum.component';
import { LisOffreComponent } from './component/Offre/lis-offre/lis-offre.component';
import { EditOffreComponent } from './component/Offre/edit-offre/edit-offre.component';
import { AddOffreComponent } from './component/Offre/add-offre/add-offre.component';
import { LisPaymentComponent } from './component/Payment/lis-payment/lis-payment.component';
import { EditPaymentComponent } from './component/Payment/edit-payment/edit-payment.component';
import { AddPaymentComponent } from './component/Payment/add-payment/add-payment.component';
import { LisPromoCodeComponent } from './component/Promo_code/lis-promo-code/lis-promo-code.component';
import { EditPromoCodeComponent } from './component/Promo_code/edit-promo-code/edit-promo-code.component';
import { AddPromoCodeComponent } from './component/Promo_code/add-promo-code/add-promo-code.component';
import { LisPurchaseOrderComponent } from './component/Purchase_order/lis-purchase-order/lis-purchase-order.component';
import { EditPurchaseOrderComponent } from './component/Purchase_order/edit-purchase-order/edit-purchase-order.component';
import { AddPurchaseOrderComponent } from './component/Purchase_order/add-purchase-order/add-purchase-order.component';
import { LisSupplierComponent } from './component/Supplier/lis-supplier/lis-supplier.component';
import { EditSupplierComponent } from './component/Supplier/edit-supplier/edit-supplier.component';
import { AddSupplierComponent } from './component/Supplier/add-supplier/add-supplier.component';
import { LisTvaComponent } from './component/Tva/lis-tva/lis-tva.component';
import { EditTvaComponent } from './component/Tva/edit-tva/edit-tva.component';
import { AddTvaComponent } from './component/Tva/add-tva/add-tva.component';
import { LisUserComponent } from './component/User/lis-user/lis-user.component';
import { EditUserComponent } from './component/User/edit-user/edit-user.component';
import { AddUserComponent } from './component/User/add-user/add-user.component';
import { EditRequestComponent } from './component/Request/edit-request/edit-request.component';
import { AddRequestComponent } from './component/Request/add-request/add-request.component';
import { ListCammanLineComponent } from './component/Cammand_line/list-camman-line/list-camman-line.component';
import { CommonModule } from '@angular/common';
import { LisRequestComponent } from './component/Request/lis-request/lis-request.component';
import { ListAdminComponent } from './component/Admin/list-admin/list-admin.component';
import { AddAdminComponent } from './component/Admin/add-admin/add-admin.component';
import { EditAdminComponent } from './component/Admin/edit-admin/edit-admin.component';

const appRoute: Routes = [
  { path:'Product' , component : ProductComponent},
  { path:'add-product' , component : AddProductComponent},
  { path:'edit-product' , component : EditProductComponent},


  { path:'category-list' , component : ListCategoryComponent},
  { path:'add-category' , component : AddCategoryComponent},
  { path:'edit-category/:id' , component : EditCategoryComponent},

  { path:'list-blog' , component : ListBblogComponent},
  { path:'add-blog' , component : AddBblogComponent},
  { path:'edit-blog/:id' , component : EditBblogComponent},


  { path:'list-shops' , component : ListShopComponent},
  { path:'add-shops' , component : AddShopComponent},
  { path:'edit-shops/:id' , component : EditShopComponent},

  { path: 'list-carts', component: ListCartsComponent },
  { path: 'add-carts', component: AddCartsComponent },
  { path: 'edit-carts/:id', component: EditCartsComponent },

  { path: 'list-chat', component: ListChatComponent },
  { path: 'add-chat', component: AddChatComponent },
  { path: 'edit-chat/:id', component: EditChatComponent },

  { path: 'edit-claim/:id', component: EditClaimComponent },
  { path: 'add-claim', component: AddClaimComponent },
  { path: 'edit-client', component: EditClientComponent },

  { path: 'add-client', component: AddClientComponent },
  { path: 'list-client', component: ListClientComponent },
  { path: 'edit-client/:id', component: EditClientComponent },


  { path: 'edit-commend-line/:id', component: EditCammandLineComponent },
  { path: 'add-command-line', component: AddCammandLineComponent },
  { path: 'list-command-line', component: ListCammanLineComponent },

  { path: 'list-comment', component: ListCommentComponent },
  { path: 'edit-comment/:id', component: EditCommentoComponent },
  { path: 'add-comment', component: AddCommentComponent },

  { path: 'list-currency', component: ListCurrencyComponent },
  { path: 'edit-currency/:id', component: EditCurrencyComponent },
  { path: 'add-currency', component: AddCurrencyComponent },

  { path: 'list-deliverer', component: ListDelivererComponent },
  { path: 'edit-deliverer/:id', component: EditDelivererComponent },
  { path: 'add-deliverer', component: AddDelivererComponent },

  { path: 'list-delivery', component: ListDeliveryComponent },
  { path: 'edit-delivery/:id', component: EditDeliveryComponent },
  { path: 'add-delivery', component: AddDeliveryComponent },

  { path: 'list-favorite', component: ListFavoriteComponent },
  { path: 'edit-favorite/:id', component: EditFavoriteComponent },
  { path: 'add-favorite', component: AddFavoriteComponent },

  { path: 'list-forum', component: ListForumComponent },
  { path: 'edit-forum/:id', component: EditForumComponent },
  { path: 'add-forum', component: AddForumComponent },

  { path: 'list-offre', component: LisOffreComponent },
  { path: 'edit-offre/:id', component: EditOffreComponent },
  { path: 'add-offre', component: AddOffreComponent },

  { path: 'list-payment', component: LisPaymentComponent },
  { path: 'edit-payment/:id', component: EditPaymentComponent },
  { path: 'add-payment', component: AddPaymentComponent },

  { path: 'list-promocode', component: LisPromoCodeComponent },
  { path: 'edit-promocode/:id', component: EditPromoCodeComponent },
  { path: 'add-promocode', component: AddPromoCodeComponent },

  { path: 'list-purchaseOrder', component: LisPurchaseOrderComponent },
  { path: 'edit-purchaseOrder/:id', component: EditPurchaseOrderComponent },
  { path: 'add-purchaseOrder', component: AddPurchaseOrderComponent },

  { path: 'list-request', component: LisRequestComponent },
  { path: 'edit-request/:id', component: EditRequestComponent },
  { path: 'add-request', component: AddRequestComponent },

  { path: 'list-supplier', component: LisSupplierComponent },
  { path: 'edit-supplier/:id', component: EditSupplierComponent },
  { path: 'add-supplier', component: AddSupplierComponent },

  { path: 'list-tva', component: LisTvaComponent },
  { path: 'edit-tva/:id', component: EditTvaComponent },
  { path: 'add-tva', component: AddTvaComponent },

  { path: 'list-user', component: LisUserComponent },
  { path: 'edit-user/:id', component: EditUserComponent },
  { path: 'add-user', component: AddUserComponent },

  { path: 'list-user', component: LisUserComponent },
  { path: 'edit-user/:id', component: EditUserComponent },
  { path: 'add-user', component: AddUserComponent },

  { path: 'list-client', component: ListClientComponent },
  { path: 'edit-client/:id', component: EditClientComponent },
  { path: 'add-client', component: AddClientComponent },

  { path: 'list-admin', component: ListAdminComponent },
  { path: 'edit-admin/:id', component: EditAdminComponent },
  { path: 'add-admin', component: AddAdminComponent },

  ]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListCammanLineComponent,
    SidebarComponent,
    ProductComponent,
    AddProductComponent,
    EditProductComponent,
    ListCategoryComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    EditShopComponent,
    ListShopComponent,
    ListBblogComponent,
    EditShopComponent,
    AddShopComponent,
    AddBblogComponent,
    AddCartsComponent,
    EditCartsComponent,
    ListCartsComponent,
    ListChatComponent,
    AddChatComponent,
    EditChatComponent,
    EditClaimComponent,
    AddClaimComponent,
    EditClientComponent,
    AddClientComponent,
    ListClientComponent,
    EditCammandLineComponent,
    EditBblogComponent,
    AddCammandLineComponent,
    ListCommentComponent,
    EditCommentoComponent,
    AddCommentComponent,
    ListCurrencyComponent,
    EditCurrencyComponent,
    AddCurrencyComponent,
    ListDelivererComponent,
    EditDelivererComponent,
    AddDelivererComponent,
    ListDeliveryComponent,
    EditDeliveryComponent,
    AddDeliveryComponent,
    ListFavoriteComponent,
    EditFavoriteComponent,
    AddFavoriteComponent,
    ListForumComponent,
    EditForumComponent,
    AddForumComponent,
    LisOffreComponent,
    EditOffreComponent,
    AddOffreComponent,
    LisPaymentComponent,
    EditPaymentComponent,
    AddPaymentComponent,
    LisPromoCodeComponent,
    EditPromoCodeComponent,
    AddPromoCodeComponent,
    LisPurchaseOrderComponent,
    EditPurchaseOrderComponent,
    AddPurchaseOrderComponent,

    LisSupplierComponent,
    EditSupplierComponent,
    AddSupplierComponent,
    LisTvaComponent,
    EditTvaComponent,
    AddTvaComponent,
    LisUserComponent,
    EditUserComponent,
    AddUserComponent,
    ListAdminComponent,
    AddAdminComponent,
    EditAdminComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute),
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
