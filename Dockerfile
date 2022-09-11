FROM	node:14.17.0
LABEL	Author="yubin.fu"

WORKDIR	/data
EXPOSE	3000
RUN	npm install yarn
RUN	yarn
CMD	yarn start
