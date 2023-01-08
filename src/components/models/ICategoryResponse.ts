export interface En {
    title: string;
}

export interface Ru {
    title: string;
}

export interface Translations {
    en: En;
    ru: Ru;
}

export interface ICategory {
    translations: Translations;
    thumbnail: string;
}

export interface ICategoryResponse extends Array<ICategory>{}