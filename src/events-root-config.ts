import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@events/dashboard",
  app: () => System.import("@events/dashboard"),
  activeWhen: () => true,
});

start({
  urlRerouteOnly: true,
});
