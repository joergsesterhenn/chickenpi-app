// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAuPHeKnjzhn-oCefJqm7zon1mnhj0ZrHQ",
    authDomain: "chickenpi-server.firebaseapp.com",
    databaseURL: "https://chickenpi-server.firebaseio.com",
    projectId: "chickenpi-server",
    storageBucket: "chickenpi-server.appspot.com",
    messagingSenderId: "557371977224",
  },
};
