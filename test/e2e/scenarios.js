'use strict';

describe('Initial Url', function() {

	it('should contain "Cherrio"', function(){
		browser().navigateTo('../../app/index.html');
		expect(element('').text()).toContain('Cheerio!');
	});
	

});