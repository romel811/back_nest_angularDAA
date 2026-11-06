import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoComponent } from './componets/producto/producto.component';
import { CategoriaComponent } from './componets/categoria/categoria.component';



@NgModule({
  declarations: [
    ProductoComponent,
    CategoriaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InventarioModule { }
