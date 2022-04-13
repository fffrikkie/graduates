import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
      path: 'example',
      loadChildren: () => import('@graduates/client/example/feature').then(x => x.FeatureModule)
    },
    {
      path: 'company-explore',
      loadChildren: () => import('@graduates/client/company-explore/feature').then(x => x.ClientCompanyExploreFeatureModule)
    },
    {
      path: 'student-explore',
      loadChildren: () => import('@graduates/client-student-explore-feature').then(x => x.ClientStudentExploreModule)
    },
    {
      path: 'company-representative',
      loadChildren: () => import('@graduates/client/company-representative/feature').then(x => x.ClientCompanyRepresentativeFeatureModule)
    },
    {
      path: 'notifications',
      loadChildren: () => import('@graduates/client/notifications/feature').then(x => x.ClientNotificationsFeatureModule)
    },
    {
      path: 'shorts',
      loadChildren: () => import('@graduates/client/shorts/feature').then(x => x.ClientShortsFeatureModule)
    },
    {
      path: 'student-profile',
      loadChildren: () => import('@graduates/client/student-profile/feature').then(x => x.ClientStudentProfileFeatureModule)
    },
    {
      path: '',
      loadChildren: () => import('@graduates/client/shell/feature').then(x => x.FeatureModule)
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }