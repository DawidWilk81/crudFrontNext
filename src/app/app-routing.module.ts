import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModifyContentComponent } from './modify-content/modify-content.component';
import { AddContentComponent } from './add-content/add-content.component';
import { ContentComponent } from './content/content.component';
import { NotFoundComponent } from './not-found/not-found.component';
const routes: Routes = [
  {path: '', component:ContentComponent},
  {path: 'Add', component:AddContentComponent},
  {path: 'Film/:id', component: ModifyContentComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
