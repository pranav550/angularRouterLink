import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StudentComponent } from "./student/student.component";
import { StudentDetailsComponent } from "./student-details/student-details.component";
const routes: Routes = [
  { path: "student", component: StudentComponent },
  { path: "studentdetails", component: StudentDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule {}
