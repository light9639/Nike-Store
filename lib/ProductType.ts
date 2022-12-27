export type productSize = {
    name: string;
    inStock: boolean;
}

export type productColors = productSize & {
    class: string;
    selectedClass: string;
}