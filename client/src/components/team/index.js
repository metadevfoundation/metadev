var thumbnailGrid = require('./thumbnail-grid.ejs');
var style = require('./thumbnail-grid.css');
var thumbnail = require('./thumbnail.ejs');

var thumbnails = [{
	caption: 'Dan',
	url: '/team-dan.jpg'
}, {
	caption: 'Jake',
	url: '/team-jake.png'
}, {
	caption: 'Hai Bac',
	url: '/team-haibac.png'
}, {
	caption: 'Tuan',
	url: '/team-tuan.png'
}, {
	caption: 'Dung',
	url: '/team-minhha.png'
}, {
	caption: 'Dung',
	url: '/team-dung.png'
}];

var inner = '';
for (var i = 0; i < thumbnails.length; i++) {
	inner += thumbnail(thumbnails[i]);
}

module.exports = function () {
	return thumbnailGrid({
		thumbnails: inner
	});
};
