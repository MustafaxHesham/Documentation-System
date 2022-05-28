import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { AllFilesComponent } from "./all-files/all-files.component";
import { AllPhasesOverviewComponent } from "./all-phases-overview/all-phases-overview.component";
import { AppComponent } from "./app.component";
import { DisplayImageComponent } from "./display-image/display-image.component";
import { NotFoundItemComponent } from "./not-found-item/not-found-item.component";
import { ProjectCharterCreateComponent } from "./project-charter-create/project-charter-create.component";
import { ProjectCharterDetailsComponent } from "./project-charter-details/project-charter-details.component";
import { ProjectCharterEditComponent } from "./project-charter-edit/project-charter-edit.component";
import { RequirementAnalysisCreateComponent } from "./requirement-analysis-create/requirement-analysis-create.component";
import { RequirementAnalysisDetailsComponent } from "./requirement-analysis-details/requirement-analysis-details.component";
import { RequirementAnalysisEditComponent } from "./requirement-analysis-edit/requirement-analysis-edit.component";
import { SDLCComponent } from "./sdlc/sdlc.component";
import { SoftwareDesignCreateComponent } from "./software-design-create/software-design-create.component";
import { SoftwareDesignDetailsComponent } from "./software-design-details/software-design-details.component";
import { SoftwareDesignOverviewComponent } from "./software-design-overview/software-design-overview.component";
import { WelcomeComponentComponent } from "./welcome-component/welcome-component.component";


const routes:Routes = [
    {path: 'sdlc', component:SDLCComponent,
        children: [
            {path: 'project-charter-create', component: ProjectCharterCreateComponent},
            {path: 'project-charter-details/:id', component: ProjectCharterDetailsComponent},
            {path: 'project-charter-edit/:id', component: ProjectCharterEditComponent},
            {path: 'software-design-create', component: SoftwareDesignCreateComponent},
            {path: 'software-design-details/:id', component: SoftwareDesignDetailsComponent},
            {path: 'requirement-analysis-create', component: RequirementAnalysisCreateComponent},
            {path: 'requirement-analysis-edit/:id', component: RequirementAnalysisEditComponent},
            {path: 'requirement-analysis-details/:id', component: RequirementAnalysisDetailsComponent},
        ]          
    },
    {path:'sdlctt', redirectTo:"sdlc", pathMatch:"full"},
    {path: 'all-files', component: AllFilesComponent, children:[{
        path:'image-details/:imgName/:imgURL', component:DisplayImageComponent
    }]},
    {path:"**", component:WelcomeComponentComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule],
})
export class AppRoutingModule {}

export const routingComponents = [
    ProjectCharterCreateComponent,
    ProjectCharterDetailsComponent,
    ProjectCharterEditComponent,
    RequirementAnalysisCreateComponent,
    RequirementAnalysisEditComponent,
    RequirementAnalysisDetailsComponent,
    SoftwareDesignCreateComponent,
    SoftwareDesignDetailsComponent,
    AllFilesComponent,
    AllPhasesOverviewComponent,
    DisplayImageComponent,
    SoftwareDesignOverviewComponent,
    SDLCComponent,
]