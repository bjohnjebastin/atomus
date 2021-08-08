import { Route } from "@angular/router";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MeetingsComponent } from "./components/meetings/meetings.component";
import { CreateMeetingComponent } from "./components/meetings/create-meeting/create-meeting.component";

export const uiRoutes: Route[] = [
    {
        path: 'meetings',
        component: MeetingsComponent,
    },
    {
        path: 'meetings/create',
        component: CreateMeetingComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(uiRoutes)],
    exports: [RouterModule]
})
export class UiRoutingModule {}
