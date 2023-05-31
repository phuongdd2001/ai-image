import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./ai-tools.component').then(
                (m) => m.AiToolsComponent
            ),
        title: 'AI Magic Tools',
    },
    {
        path: 'gen-video',
        loadComponent: () =>
            import('./components/gen-video/gen-video.component').then(
                (m) => m.GenVideoComponent
            ),
        title: 'Video to Video',
    },
];
