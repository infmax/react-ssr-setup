export type Locale = 'en_US' | 'de_DE';

export type AppState = Readonly<{
    feature: []
}>;

export type Action = {
    type: string;
    payload: any;
};
