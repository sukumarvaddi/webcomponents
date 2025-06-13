export declare class SideDrawer {
    private activeTab;
    title: string;
    open: boolean;
    constructor();
    toggle(): Promise<void>;
    closeSideDrawer(): void;
    setActiveTab(tab: string): void;
    render(): any;
}
