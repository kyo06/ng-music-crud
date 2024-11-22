import { Routes } from '@angular/router';
/*
import { MusicAppComponent } from './components/music-app/music-app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SongFormComponent } from './components/song-form/song-form.component';


//Not Lazy loading routes
export const routes: Routes = [
    {
        path: '',
        component: MusicAppComponent
    },
    {
        path: 'add',
        component: SongFormComponent
    },
    {
        path: 'edit/:id',
        component: SongFormComponent
    },
    {
        path: '404',
        component: NotFoundComponent
    },
    {
        path: '**',
        redirectTo: '/404'
    }
];
*/

//Lazy loading routes
export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/music-app/music-app.component').then(m => m.MusicAppComponent)
    },
    {
        path: 'add',
        loadComponent: () => import('./components/song-form/song-form.component').then(m => m.SongFormComponent)
    },
    {
        path: 'edit/:id',
        loadComponent: () => import('./components/song-form/song-form.component').then(m => m.SongFormComponent)
    },
    {
        path: '404/:message',
        loadComponent: () => import('./components/not-found/not-found.component').then(m => m.NotFoundComponent)
    },      
    {
        path: '**',
        redirectTo: '/404/Page not found'
    }
];

