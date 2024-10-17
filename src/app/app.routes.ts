import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { MateriasComponent } from './components/materias/materias.component';
import { ContadorComponent } from './contador/contador.component';
import { AboutComponent } from './componentes/about/about.component';

export const routes: Routes = [
    {
        path: "materias",
        component: MateriasComponent
    },
    {
        path: "contador",
        component: ContadorComponent
    },
    {
        path: "about",
        component:AboutComponent
    },
    {
        path: "*",
        redirectTo:'materias'
    }
];
