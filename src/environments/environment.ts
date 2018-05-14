// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  adalConfig: {
    tenant: '365.birdvilleschools.net',
    clientId: '20d6ffed-468c-4a01-bebb-2751c1b82be2',
    postLogoutRedirectUri: 'http://localhost:4200/logout',
    endpoints: {
      'https://adaltestapi.azurewebsites.net': 'https://adaltestapi.azurewebsites.net'
    },
  },
  apiUrl: 'https://adaltestapi.azurewebsites.net/api/'
};
