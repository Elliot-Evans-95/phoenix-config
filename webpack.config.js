const path = require('path');

module.exports = {
	mode: 'production',
	entry: './src/phoenix.ts',
	output: {
		path: path.resolve(__dirname, 'out'),
		filename: 'phoenix.[hash].js',
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
	module: {
		rules: [
			{ test: /\.ts$/, loader: 'ts-loader' },
		],
	},
};
