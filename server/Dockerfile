FROM node:carbon

ADD dist /home/node/app/dist
ADD package.json /home/node/app/package.json

RUN chown -R node:node /home/node/app 

USER node
WORKDIR /home/node/app
RUN npm install --save

EXPOSE 8000

#CMD node dist/server.js
CMD npm run watch
