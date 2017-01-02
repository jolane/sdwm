/*jslint node: true */
import { expect } from 'chai';
import { Selector } from 'testcafe';

const qs = Selector(query => document.querySelector(query));

fixture `Getting Started`
	.page('http://localhost:4444/');


test('First Test', async t => {
	// test
});
