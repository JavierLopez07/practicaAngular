import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { MateriasComponent } from './components/materias/materias.component';
import { ContadorComponent } from './contador/contador.component';
import { AboutComponent } from './componentes/about/about.component';
import { Page404Component } from './components/page404/page404.component';
import { ProcesosComponent } from './components/procesos/procesos.component';
import { FormularioComponent } from './components/formulario/formulario.component';

export const routes: Routes = [
    {
        path: "materias",
        component: MateriasComponent
    },
    {
        path: "procesos",
        component: ProcesosComponent,
        children: [
            {
                path: "contador",
                component: ContadorComponent
            },
            {
                path: 'formulario/:id/:cod',
                component: FormularioComponent
            }
        ]
    },
    {
        path: "about",
        component:AboutComponent
    },
    {
        path: "*",
        redirectTo: 'materias',
        pathMatch:'full'
    },
    {
        path: "**",
        component: Page404Component
    }
];
