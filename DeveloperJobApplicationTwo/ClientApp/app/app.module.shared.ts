import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { AddjobComponent } from './components/addjob/addjob.component';

import { ViewjobComponent } from './components/viewjob/viewjob.component';

import { Greeter } from '../app/services/Greeter';

import { DEVLOPERJOB_ROUTES } from '../app/jobroutes/jobRoutes';

import { DeveloperJobDataService } from '../app/services/developerjob.dataservice';

import { TimeSince } from '../app/pipes/timesince';





@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        AddjobComponent,
        ViewjobComponent,
        TimeSince
    ],

    providers: [DeveloperJobDataService],


    exports: [

        FormsModule,
        ReactiveFormsModule
],
   
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(DEVLOPERJOB_ROUTES)
    ]
})
export class AppModuleShared {
}
