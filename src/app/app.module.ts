import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DocumentationService } from './Software-Documentation-Service/Software-Documentation.service';
import { AppComponent } from './app.component';
import { ProjectCharterCreateComponent } from './project-charter-create/project-charter-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectCharterDetailsComponent } from './project-charter-details/project-charter-details.component';
import { ProjectCharterEditComponent } from './project-charter-edit/project-charter-edit.component';
import { RequirementAnalysisCreateComponent } from './requirement-analysis-create/requirement-analysis-create.component';
import { RequirementAnalysisEditComponent } from './requirement-analysis-edit/requirement-analysis-edit.component';
import { RequirementAnalysisDetailsComponent } from './requirement-analysis-details/requirement-analysis-details.component';
import { SoftwareDesignCreateComponent } from './software-design-create/software-design-create.component';
import { SoftwareDesignDetailsComponent } from './software-design-details/software-design-details.component';
import { AllPhasesOverviewComponent } from './all-phases-overview/all-phases-overview.component';
import { SoftwareDesignOverviewComponent } from './software-design-overview/software-design-overview.component';
import { SDLCComponent } from './sdlc/sdlc.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { NotFoundItemComponent } from './not-found-item/not-found-item.component';
import { WelcomeComponentComponent } from './welcome-component/welcome-component.component';
import { AllFilesComponent } from './all-files/all-files.component';
import { DisplayImageComponent } from './display-image/display-image.component';
import { ImageContainerComponent } from './image-container/image-container.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NotFoundItemComponent,
    WelcomeComponentComponent,
    AllFilesComponent,
    DisplayImageComponent,
    ImageContainerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [DocumentationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
