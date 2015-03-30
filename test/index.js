var parse = require('./..');
var test = require('tape');

test('parse simple', function(t) {

	t.deepEqual(parse('div'), [{el: 'div'}], 'simple one element');
	t.deepEqual(parse('#id'), [{id: '#id'}], 'simple one id');
	t.deepEqual(parse('.classA'), [{className: '.classA'}], 'simple one className');
	t.deepEqual(parse('.classA.classB'), [{className: '.classA.classB'}], 'simple two className');

	t.end();
});

test('parse complex', function(t) {

	t.deepEqual(parse('div#id.className'), [{el: 'div', id: '#id', className: '.className'}], 'all parts used');
	t.deepEqual(parse('div a ul'), [{el: 'div'}, {el: 'a'}, {el: 'ul'}], 'three elements');
	t.deepEqual(parse('div a#id .test'), [{el: 'div'}, {el: 'a', id: '#id'}, {className: '.test'}], 'most complex');

	t.end();
});