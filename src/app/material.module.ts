import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { 
    BrowserAnimationsModule, 
    NoopAnimationsModule 
} from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
    imports: [
        MatButtonModule,
        MatInputModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
        MatFormFieldModule,
        MatSelectModule,
    ],
    exports:[
        MatButtonModule,
        MatInputModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
        MatFormFieldModule,
        MatSelectModule,
    ]
})
export class MaterialModule {}  