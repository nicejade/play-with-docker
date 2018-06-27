FROM node:carbon

ENV YARN_VERSION 1.5.1

RUN curl -fSLO --compressed "https://yarnpkg.com/downloads/$YARN_VERSION/yarn-v$YARN_VERSION.tar.gz" \
    && tar -xzf yarn-v$YARN_VERSION.tar.gz -C /opt/ \
    && ln -snf /opt/yarn-v$YARN_VERSION /opt/yarn \
    && rm yarn-v$YARN_VERSION.tar.gz

WORKDIR /tmp
COPY yarn.lock ./
COPY package.json ./
RUN yarn

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . .
RUN cp -a /tmp/node_modules /app/

EXPOSE 3333

# ENV NODE_ENV server
CMD ["yarn", "run", "server"]

# At the end, set the user to use when running this image
USER node
