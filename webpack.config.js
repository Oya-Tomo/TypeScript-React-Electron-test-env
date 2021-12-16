module.exports = {
    mode: "production",
    entry: "./src/index.tsx",
    output: {
        path: __dirname + "/dist/render",
        filename: "index.js",
    },
    module: {
        rules: [
            // {
            //     test: /\.jsx?$/,
            //     exclude: /node_modules/,
            //     use: {
            //         loader: 'babel-loader',
            //         options: {
            //             presets: [
            //                 '@babel/preset-env',
            //                 '@babel/preset-react',
            //             ],
            //             plugins: ['@babel/plugin-syntax-jsx']
            //         }
            //     }
            // },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        configFile: "tsconfig-render.json",
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx",  ".json"]
    }
}