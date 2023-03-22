export default production => {
    const mode = production ? 'production' : 'development';
    let filename = '[name]';

    if (production) {
        filename += '.[chunkhash]';
    }

    filename += '.js';

    const config = {
        mode: mode,
        output: {
            filename,
        },
        module: {
            rules: [
                {
                    test: /\.m?js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                        },
                    },
                },
            ],
        },
        stats: 'errors-only',
    };

    return config;
};
