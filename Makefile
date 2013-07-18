
build: components index.js
	@component build --dev

components: component.json
	@component install --dev

clean:
	rm -fr build components template.js

test:
	@./node_modules/.bin/mocha test/index.test.js\
		--reporter spec

.PHONY: clean test
test/built.js:
	@node_modules/.bin/sourcegraph.js test/browser.js\
		--plugins mocha,nodeish,javascript\
		| node_modules/.bin/bigfile\
		 	--leave-paths\
		 	--export null\
		 	--plug nodeish > test/built.js

.PHONY: clean test build