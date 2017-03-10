var webpack=require('webpack');
module.exports={
	entry:'./public/javascripts/entry.js',
	output:{
		path:'/build/',
		filename:"[name].bundle.js"
	},
	module:{
		loaders:[{test:/\.js$/,loader:'jsx-loader'},{test:/\.scss$/,loader:["style", "css", "sass"]}]
	},
	plugins: [
      /*new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': '"production"'
        }
      });*/
    ]
}