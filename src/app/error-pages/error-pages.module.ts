import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPagesRoutes } from './error-pages.routing';
import { NotFoundComponent } from './';
// import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,
    ErrorPagesRoutes
  ],
  declarations: [NotFoundComponent]
})
export class ErrorPagesModule { }
