import { Routes } from '@angular/router';
import { GmScreenComponent } from './gm-screen/gm-screen.component';
import { PlaybookComponent } from './playbook/playbook.component';

export const routes: Routes = [
    {
        path: '',
        component: GmScreenComponent,
    },
    {
        path: 'playbook/:id',
        component: PlaybookComponent,
    },
];
