import {ChangeDetectionStrategy, Component, computed, inject} from '@angular/core';
import {TUI_DOC_ICONS} from '@taiga-ui/addon-doc';
import {TUI_DARK_MODE, TuiButton, TuiIcon, TuiLink, TuiRoot} from '@taiga-ui/core';
import {TuiAvatar, TuiBadge, TuiBadgedContentComponent} from '@taiga-ui/kit';

import {AppComponent} from './app/app.component';

@Component({
    standalone: true,
    selector: 'root',
    imports: [
        AppComponent,
        TuiAvatar,
        TuiBadge,
        TuiBadgedContentComponent,
        TuiButton,
        TuiIcon,
        TuiLink,
        TuiRoot,
    ],
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

                <div class="buttons">
                    <button
                        appearance="secondary"
                        size="s"
                        tuiIconButton
                        type="button"
                        [iconStart]="icon()"
                        [style.border-radius.%]="100"
                        (click)="darkMode.set(!darkMode())"
                    ></button>

                    <a
                        href="https://github.com/taiga-family/taiga-ui"
                        target="_blank"
                    >
                        <tui-badged-content [style.--tui-radius.%]="50">
                            <tui-icon
                                appearance="flat"
                                icon="@tui.star"
                                size="s"
                                style="color: orange"
                                tuiBadge
                                tuiSlot="bottom"
                            />

                            <tui-avatar
                                size="s"
                                src="@tui.github"
                            />
                        </tui-badged-content>
                    </a>
                </div>
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
