{ pkgs, lib, config, inputs, ... }:

{
  packages = with pkgs; [
    nodePackages.typescript-language-server
    nodePackages.vscode-json-languageserver
    nodePackages.prisma
    openssl
  ];

  cachix.enable = false;

  languages.javascript = {
    enable = true;
    npm.enable = true;
    pnpm.enable = true;
    yarn.enable = true;
  };
}
