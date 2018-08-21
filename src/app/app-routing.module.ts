import { NgModule } from '@angular/core';
// Rutas
import {Routes, RouterModule} from '@angular/router';
// Componentes
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { AgroindustriaComponent } from './pages/agroindustria/agroindustria.component';
import { ComercializacionComponent } from './pages/comercializacion/comercializacion.component';
import { LineasComponent } from './pages/lineas/lineas.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
// Constante
const app_routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'nosotros/:id', component: NosotrosComponent },
    { path: 'agroindustria', component: AgroindustriaComponent },
    { path: 'comercializacion', component: ComercializacionComponent },
    { path: 'lineas', component: LineasComponent },
    { path: 'servicios', component: ServiciosComponent},
    { path: 'contacto', component: ContactoComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(app_routes, { useHash: true } )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
