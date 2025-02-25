import { IDockviewPanelModel } from '../../dockview/dockviewPanelModel';
import { DockviewGroupPanel } from '../../dockview/dockviewGroupPanel';
import {
    TabPartInitParameters,
    IContentRenderer,
    ITabRenderer,
} from '../../dockview/types';
import { PanelUpdateEvent } from '../../panel/types';
import { TabLocation } from '../../dockview/framework';

export class DockviewPanelModelMock implements IDockviewPanelModel {
    constructor(
        readonly contentComponent: string,
        readonly content: IContentRenderer,
        readonly tabComponent: string,
        readonly tab: ITabRenderer
    ) {
        //
    }

    copyTabComponent(tabLocation: TabLocation): ITabRenderer {
        return this.tab;
    }

    init(params: TabPartInitParameters): void {
        //
    }

    updateParentGroup(
        group: DockviewGroupPanel,
        isPanelVisible: boolean
    ): void {
        //
    }

    update(event: PanelUpdateEvent): void {
        //
    }

    layout(width: number, height: number): void {
        //
    }

    dispose(): void {
        //
    }
}
