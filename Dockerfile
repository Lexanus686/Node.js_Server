FROM node:12
ADD . /
RUN npm install express
CMD node index.js