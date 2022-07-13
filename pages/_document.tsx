import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Edu+SA+Beginner:wght@500&family=Kaushan+Script&family=Lobster&family=Poppins&display=swap" rel="stylesheet" />

                </Head>
                <body className='transition duration-75 ease-in-out bg-fixed bg-gradient-to-r from-green to-blue-500 dark:from-dark-500 dark:to-dark-700 dark:text-white'>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument