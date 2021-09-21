import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopComponent } from './Top/Top.component';
import { CaseStudyComponent } from './WhyGoogle/CaseStudy/CaseStudy.component';
import { ForHigherEdComponent } from './WhyGoogle/ForHigherEd/ForHigherEd.component';
import { ForK12Component } from './WhyGoogle/ForK12/ForK12.component';
import { OurCommitmentComponent } from './WhyGoogle/OurCommitment/OurCommitment.component';

const routes: Routes = [
  { path: 'CaseStudy', component: CaseStudyComponent },
  { path: 'ForHigherEd', component: ForHigherEdComponent },
  { path: 'ForK12', component: ForK12Component },
  { path: 'OurCommitment', component: OurCommitmentComponent },
  { path: '', component: TopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
