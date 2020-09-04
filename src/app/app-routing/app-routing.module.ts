import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { FooterComponent } from '../footer/footer.component';

const routes: Routes = [
  {
    path: '',
    component: NavigationBarComponent,
  },
  {
    path: 'navigation bar',
    component: NavigationBarComponent,
  },
  // {
  //   path: 'footer',
  //   component: FooterComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
