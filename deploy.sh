cd demo
yarn build 
yarn build:static
gh-pages -d ./out -b gh-pages -r https://$GH_TOKEN@github.com/marcelovicentegc/i18n-iso-languages.git