export default function RootLayout({ children }) {
    return (
        <html>
            <head>
                <title>CypheraX</title>
            </head>
            <body>{children}</body>
        </html>
    );
}