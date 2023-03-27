FROM ubuntu:20.04

ENV TZ=America/Toronto
LABEL authors="prawal@secureailabs.com"
USER root

# Set time zone data
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN apt-get update && \
  apt-get -y upgrade && \
  apt-get install -y \
  nginx \
  curl

RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
  apt-get install -y nodejs

ENTRYPOINT ["/bin/bash"]
