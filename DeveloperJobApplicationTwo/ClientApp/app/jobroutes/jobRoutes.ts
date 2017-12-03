import { Routes } from '@angular/router';

import { AppComponent } from '../components/app/app.component';
import { NavMenuComponent } from '../components/navmenu/navmenu.component';
import { HomeComponent } from '../components/home/home.component';
import { FetchDataComponent } from '../components/fetchdata/fetchdata.component';
import { CounterComponent } from '../components/counter/counter.component';
import { AddjobComponent } from '../components/addjob/addjob.component';
 
import { ViewjobComponent } from '../components/viewjob/viewjob.component';


export const DEVLOPERJOB_ROUTES: Routes =
    [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', component: HomeComponent },
        { path: 'counter', component: CounterComponent },
        { path: 'fetch-data', component: FetchDataComponent },
        { path: 'add-job', component: AddjobComponent },
        { path: 'view-job', component: ViewjobComponent },
        { path: '**', redirectTo: 'home' }

    ];

