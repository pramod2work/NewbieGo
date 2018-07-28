FROM google/cloud-sdk:alpine

RUN apk --update add nodejs yarn

ADD . /newbie-go

WORKDIR /newbie-go