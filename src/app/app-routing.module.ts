import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { TableComponent } from './table/table.component';


const routes: Routes = [

  {
    path : 'Table',
    pathMatch: 'full',
    component : TableComponent
    
  },
  {
    path : 'Card',
    pathMatch: 'full',
    component : CardComponent
    
  },
  {
    path: '**',
    redirectTo : 'Table'
    }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash : true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
