FROM linuxserver/code-server:4.17.1


RUN apt update
WORKDIR /app
COPY ./ /app
RUN chown -R 911:911 /app
ENV DEFAULT_WORKSPACE /app
RUN usermod -aG sudo abc
RUN echo '%sudo ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers
EXPOSE 3000