/**
 * Created by MR on 31/01/2010
 */

module.exports = {

    entry: ['./app/index.js'],
    output: {
    path: __dirname + "/build" ,
    filename: 'bundle.js'
    },

    devServer: {
        port: 3000,
        contentBase: __dirname + "/build",
        inline: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: "babel-loader"
            }
        ]
    }


};

