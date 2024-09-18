import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiIcon} from '@taiga-ui/core';

@Component({
    standalone: true,
    selector: 'app',
    imports: [TuiIcon],
    templateUrl: './app.component.html',
    styleUrl: './app.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
