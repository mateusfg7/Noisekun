ARG VARIANT=20-bookworm

FROM node:${VARIANT}
 
ARG NPM_GLOBAL=/usr/local/share/npm-global

# Add NPM global to PATH.
ENV PATH=${NPM_GLOBAL}/bin:${PATH}
