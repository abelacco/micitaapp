import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  // Añade otras rutas aquí
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

// import { Component } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { AppComponent } from './app.component';
// import { SesionNoValidaGuard } from './core-app/guards/sesion.no.valida.guard';
// import { SesionValidaGuard } from './core-app/guards/sesion.valida.guard';
// import { allRoutesApp } from './features/appRoutes';
// import { PageNotFoundComponent } from './features/errors/page-not-found/page-not-found.component';
// import { ContentLayoutComponent } from './ui/content-layout/content-layout.component';


// const APP_ROUTES: Routes = [

   
//     {
//         path: '',
//         component: ContentLayoutComponent,
//         // canActivate: [SesionValidaGuard],
//         children: allRoutesApp(),
//     },
//     {
//         path: '',
//         redirectTo: '',
//         pathMatch: 'full',
//     },
//     {
//         path: '**',
//         pathMatch: 'full',
//         // component: PageNotFoundComponent,
//     }

// ];

// export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
