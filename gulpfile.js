var gulp = require('gulp');
var minifyInline = require('gulp-minify-inline');
var gulpif = require('gulp-if');
var gulpIgnore = require('gulp-ignore');
var htmlmin = require('gulp-htmlmin');
var path = require('path');

var condition = function (_file){
	var file = path.basename( _file.path, '.html' );
    var ext = path.extname( _file.path );
    var search = _file.path.split( path.sep );
    var condition = false;
    if( search.indexOf( 'bower_components' ) !== -1 )
        condition = false;
	if( file === 'test' || ext === '.DS_Store' )
		condition = false;
    if( ext === '.html' )
        condition = true;
    else
        condition = false;

	return condition;
}
var conditionBower = function (_file){
    var search = _file.path.split(path.sep);
    return (search.indexOf( 'bower_components' ) !== -1);
}
var testFiles = function (_file){
    var search = _file.path.split(path.sep);
    return (search.indexOf( 'test.html' ) !== -1);
}
var markdownFiles = function (_file){
    var search = _file.path.split(path.sep);
    return (search.indexOf( 'readme.md' ) !== -1);
}

gulp.task('build', function(){
    gulp.src('awc-web/**/*')
    .pipe( gulpIgnore.exclude( conditionBower ) )
    .pipe( gulpIgnore.exclude( testFiles ) )
    .pipe( gulpIgnore.exclude( markdownFiles ) )
    .pipe( gulpif( condition, minifyInline() ) )
    .pipe( gulpif( condition, htmlmin({collapseWhitespace: true}) ) )
    .pipe( gulp.dest('dist/awc-web') );

   // gulp.src('awc-web/**/test/**/*')
   // .pipe( gulpIgnore.exclude( conditionBower ) )
   // .pipe( gulp.dest('dist/awc-web') );

    gulp.src('awc-web/bower.json')
    .pipe( gulp.dest('dist/awc-web') );
});