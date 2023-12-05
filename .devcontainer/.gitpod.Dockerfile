FROM gitpod/workspace-node:latest

# Update system
RUN sudo apt update && sudo apt upgrade -y

# Setup Pnpm
RUN corepack enable
RUN npm i -g pnpm@latest

# Setup ZSH with Oh-My-Zsh
RUN sh -c "$(wget -O- https://github.com/deluan/zsh-in-docker/releases/download/v1.1.5/zsh-in-docker.sh)" -- \
  -t https://github.com/denysdovhan/spaceship-prompt \
  -p git -p ssh-agent -p yarn \
  -p https://github.com/zsh-users/zsh-autosuggestions \
  -p https://github.com/zsh-users/zsh-completions \
  -p https://github.com/zdharma-continuum/fast-syntax-highlighting


ENV SHELL=/usr/bin/zsh
