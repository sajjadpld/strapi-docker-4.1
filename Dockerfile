FROM node:16.15-alpine3.14
RUN mkdir -p /opt/app
WORKDIR /opt/app
RUN adduser -S app
COPY app/ .
RUN npm install
RUN npm install --save @strapi/strapi
RUN chown -R app /opt/app
USER app
RUN npm run build
EXPOSE 1332
CMD [ "npm", "run", "develop" ]