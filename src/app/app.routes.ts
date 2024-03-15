import { Routes } from '@angular/router';
import { TheosCoreLibraryComponent} from  '../../node_modules/theos-core-library/src/public-api';


export const routes: Routes = [     
    { path: '' , 
        component: TheosCoreLibraryComponent
    },
    { path: '**' , 
         component: TheosCoreLibraryComponent
    }
];
