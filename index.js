var REG_ID = /#\w+/;
var REG_CLAS = /\.\w+/;

module.exports = function parseSelector(selector) {

	var selectorParts = selector.split(' ');

	return selectorParts.map( function(selector, idx) {

		var info = {};
		var el;
		var id;
		var className;

		className = selector.replace(REG_ID, function(matchedID) {

			id = matchedID;

			return '';
		});

		if(className.charAt(0) !== '.') {
			el = className.split('.')[ 0 ];
			className = className.replace(el,'');
		}

		if(el) {
			info.el = el;
		}

		if(id) {
			info.id = id;
		}

		if(className !== '') {
			info.className = className;
		}

		return info;
	});
};