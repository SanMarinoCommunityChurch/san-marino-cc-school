const config = {
    plugins: ["./node_modules/prettier-plugin-astro"],
    // htmlWhitespaceSensitivity: 'ignore',
    overrides: [
        {
            files: '*.astro',
            options: {
                parser: 'astro'
            }
        }
    ]
}

export default config;