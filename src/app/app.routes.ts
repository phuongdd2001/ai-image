import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/ai-tools',
    title: 'AI Magic Tools',
  },
  {
    path: 'ai-tools',
    loadChildren: () =>
      import('./pages/ai-tools/ai.tools.routes').then(
        (m) => m.routes
      ),
    title: 'AI Magic Tools',
  },
];
