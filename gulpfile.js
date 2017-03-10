var gulp=require('gulp');
var sass=require('gulp-sass');
var minifyCss=require('gulp-minify-css');
var jshint=require('gulp-jshint');
var uglify=require('gulp-uglify');
var webpack=require('gulp-webpack');
var webpackConfig=require('./webpack.config.js');

//sass编译为css并压缩
gulp.task('css',function(){
	gulp.src('public/stylesheets/*.scss').pipe(sass()).pipe(minifyCss()).pipe(gulp.dest('build/css'));
});

//js使用jshint测试格式，使用webpack加载，uglify压缩
gulp.task('js',function(){
	gulp.src('public/javascripts/*.js').pipe(jshint()).pipe(jshint.reporter('default')).pipe(webpack(webpackConfig)).pipe(uglify()).pipe(gulp.dest('build/js'));
});

//监测文件变化则运行相关任务
gulp.task('watch',function(){
	gulp.watch('public/stylesheets/*.scss',['css']);
	gulp.watch('public/javascripts/*.js',['js']);
});

gulp.task('default',['css','js','watch']);