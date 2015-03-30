# MetaDev

[MetaDev](http://metadevfoundation.org) web-app slash homepage.


## Fundamentals

 [io.js](iojs.org) is a fork of node that implements a faster development cycle and open governance.

[nvm](nvm.sh) is a version manager for node, removing conflicts between io.js and node.js installations.


## Running It


First you will need to install [nvm](nvm.sh).

	curl https://raw.githubusercontent.com/creationix/nvm/v0.24.0/install.sh | bash
	reset

	nvm install iojs

	iojs
	>
	(^C again to quit)
	>


Now download and run the code.


	git clone https://github.com/metagen/metadev

	cd metadev
	npm install

	./serve.js


## Development

Commits to the master branch are automatically deployed to metadevfoundation.org. Done with a Github webhook and what's in the deploy folder.
