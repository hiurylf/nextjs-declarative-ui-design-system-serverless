import NextDocument, {Html, Head, Main, NextScript} from 'next/document'
import {ColorModeScript} from '@chakra-ui/react'

export default class Document extends NextDocument {
    render(): JSX.Element {
        return (
            <Html>
                <Head/>
                <body>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
                      rel="stylesheet"/>
                {/* Make Color mode to persists when you refresh the page. */}
                <ColorModeScript initialColorMode={'dark'}/>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}
