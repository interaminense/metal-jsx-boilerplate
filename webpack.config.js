module.exports = {
	module: {
			rules: [
					{
						test: /\.(js)$/,
						exclude: /node_modules/,
						use: {
							loader: "babel-loader"
						}
					},
					{
						test: /\.scss$/,
						use: [{
							loader: "style-loader"
						}, {
							loader: "css-loader"
						}, {
							loader: "sass-loader"
						}]
					}
			]
	}
};
