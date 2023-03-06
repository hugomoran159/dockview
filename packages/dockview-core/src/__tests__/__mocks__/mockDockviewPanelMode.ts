import { IDockviewPanelModel } from '../../dockview/dockviewPanelModel';
import { DockviewGroupPanel } from '../../groupview/dockviewGroupPanel';
import {
    GroupPanelPartInitParameters,
    GroupPanelUpdateEvent,
    IContentRenderer,
    ITabRenderer,
} from '../../groupview/types';

export class DockviewPanelModelMock implements IDockviewPanelModel {
    constructor(
        readonly contentComponent: string,
        readonly content: IContentRenderer,
        readonly tabComponent?: string,
        readonly tab?: ITabRenderer
    ) {
        //
    }

    init(params: GroupPanelPartInitParameters): void {
        //
    }

    update(event: GroupPanelUpdateEvent): void {
        //
    }

    layout(width: number, height: number): void {
        //
    }

    updateParentGroup(
        group: DockviewGroupPanel,
        isPanelVisible: boolean
    ): void {
        //
    }

    dispose(): void {
        //
    }
}
