import {ChangeDetectionStrategy, Component, computed, inject} from '@angular/core';
import {TUI_DOC_ICONS} from '@taiga-ui/addon-doc';
import {TUI_DARK_MODE, TuiButton, TuiRoot} from '@taiga-ui/core';

import {AppComponent} from './app/app.component';

@Component({
    standalone: true,
    selector: 'root',
    imports: [AppComponent, TuiButton, TuiRoot],
    template: `
        <tui-root [attr.tuiTheme]="darkMode() ? 'dark' : null">
            <header class="header">
                <h1>
                    <img
                        alt="taiga ui logo"
                        src="https://raw.githubusercontent.com/taiga-family/taiga-ui/main/projects/demo/src/assets/images/taiga.svg"
                        width="24"
                    />
                    Taiga UI
                </h1>

                <button
                    appearance="secondary"
                    size="s"
                    tuiIconButton
                    type="button"
                    class="mode"
                    [iconStart]="icon()"
                    [style.border-radius.%]="100"
                    (click)="darkMode.set(!darkMode())"
                ></button>

                <iframe
                    frameborder="0"
                    height="30"
                    scrolling="0"
                    src="https://ghbtns.com/github-btn.html?user=Taiga-family&repo=taiga-ui&type=star&count=true&size=large"
                    title="GitHub"
                    width="170"
                ></iframe>
            </header>

            <app />
        </tui-root>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Root {
    private readonly icons = inject(TUI_DOC_ICONS);
    protected readonly darkMode = inject(TUI_DARK_MODE);
    protected readonly icon = computed(() =>
        this.darkMode() ? this.icons.light : this.icons.dark,
    );
}
