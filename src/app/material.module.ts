import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {NgFor, NgIf} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';


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
        MatMenuModule,
        NgIf,
        MatIconModule,
        MatTableModule,
        MatTabsModule,
        MatCheckboxModule
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
        FormsModule,
        MatMenuModule,
        NgIf,
        MatIconModule,
        MatTableModule,
        MatTabsModule,
        MatCheckboxModule
    ]
})
export class MaterialModule {}  