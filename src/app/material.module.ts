import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { 
    BrowserAnimationsModule, 
    NoopAnimationsModule 
} from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {NgFor} from '@angular/common';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
    imports: [
        MatButtonModule,
        MatInputModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatAutocompleteModule,
        NgFor,
        ReactiveFormsModule,
        FormsModule,
        
    ],
    exports:[
        MatButtonModule,
        MatInputModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatAutocompleteModule,
        NgFor,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class MaterialModule {}  