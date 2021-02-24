import { extendTheme } from '@chakra-ui/react';
import {ThemeOverride} from '@chakra-ui/react/dist/types/extend-theme';

const override: ThemeOverride = {
    config: {
        useSystemColorMode: false
    },
    fonts: {
        body: 'Roboto, system-ui, sans-serif',
        heading: 'Roboto, system-ui, sans-serif',
        mono: 'Menlo, monospace'
    },
    fontWeights: {
        medium: 400,
        normal: 600,
        bold: 700
    },
    radii: {
        sm: '5px',
        md: '8px'
    },
    colors: {
        purple: {
            500: '#8257e5'
        },
    }
}

const theme = extendTheme(override);

export default theme;
