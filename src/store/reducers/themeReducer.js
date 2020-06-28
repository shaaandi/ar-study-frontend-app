const initialState = {
    PRIMARY: '#00DDFF',
    SECONDARY: '#0049B7',
    TYPOGRAPHY: 'gray',
    HEADING: 'black',
};

const themes = {};

const themesMap = (label) => {
    return themes[label];
};

export default function themeReducer(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_THEME':
            const { label } = action.payload;
            const newTheme = themesMap(label);
            return newTheme;
        default:
            return state;
    }
}
