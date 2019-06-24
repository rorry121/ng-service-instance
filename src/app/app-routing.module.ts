import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: 'lazy',
		loadChildren: () => import('../lazy/lazy.module').then(mod => mod.LazyModule)
	}
]

@NgModule({
	imports: [ RouterModule.forRoot(routes, {
		useHash: true
	  })],
	exports: [RouterModule]
})
export class AppRoutingModule { }