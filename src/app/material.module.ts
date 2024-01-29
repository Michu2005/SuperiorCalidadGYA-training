import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { 
    BrowserAnimationsModule, 
    NoopAnimationsModule 
} from '@angular/platform-browser/animations';


@NgModule({
    imports: [
        MatButtonModule,
        MatInputModule,
        BrowserAnimationsModule,
        NoopAnimationsModule
    ],
    exports:[
        MatButtonModule,
        MatInputModule,
    ]
})
export class MaterialModule {}  