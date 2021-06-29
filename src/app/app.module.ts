import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileHeaderComponent } from './components/profile-header/profile-header.component';
import { CareerGraphComponent } from './components/career-graph/career-graph.component';
import { ProfileHighlightComponent } from './components/profile-highlight/profile-highlight.component';
import { EduHighlightComponent } from './components/edu-highlight/edu-highlight.component';
import { CompanyProfileComponent } from './components/company-profile/company-profile.component';
import { ProjectProfileComponent } from './components/project-profile/project-profile.component';
import { ExperienceDetailsViewComponent } from './components/experience-details-view/experience-details-view.component';
import { PersonalDataViewComponent } from './components/personal-data-view/personal-data-view.component';
import { AddressTileComponent } from './components/address-tile/address-tile.component';
import { PersonalDataTileComponent } from './components/personal-data-tile/personal-data-tile.component';
import { LanguageBlockComponent } from './components/language-block/language-block.component';
import { ProfileViewerComponent } from './components/profile-viewer/profile-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileHeaderComponent,
    CareerGraphComponent,
    ProfileHighlightComponent,
    EduHighlightComponent,
    CompanyProfileComponent,
    ProjectProfileComponent,
    ExperienceDetailsViewComponent,
    PersonalDataViewComponent,
    AddressTileComponent,
    PersonalDataTileComponent,
    LanguageBlockComponent,
    ProfileViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
