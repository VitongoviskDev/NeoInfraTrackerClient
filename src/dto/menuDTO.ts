export interface MenuItemDTO {
    url: string;
    label: string;
    icon: React.ReactNode;
}

export interface MenuDTO {
    name: string;
    items: MenuItemDTO[];
    role: string;
}
