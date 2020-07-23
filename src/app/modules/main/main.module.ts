import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { BgDirective } from './directives/bg.directive';
import { RouterModule } from '@angular/router';
import { MyIfDirective } from './directives/my-if.directive';
import { MyLoopDirective } from './directives/my-loop.directive';
import { JoinPipe } from './pipes/join.pipe';
import { MySlicePipe } from './pipes/my-slice.pipe';
import { AboutComponent } from './components/about/about.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    BgDirective,
    MyIfDirective,
    MyLoopDirective,
    MySlicePipe,
    JoinPipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [],
  exports: [
    HomeComponent
  ]
})
export class MainModule { }
