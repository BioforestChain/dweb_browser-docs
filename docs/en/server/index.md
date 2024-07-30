# Plaoc Worker

::: warning
The programmable backend is still in its early stages and might undergo significant changes.
:::

To uphold the principles of open security and prioritizing local data, we have developed `Plaoc Worker` services. The goal is to enable users to fully control their data without depending on servers, thus fostering greater collaboration between applications.

Each `Plaoc App` comes with a programmable backend `Plaoc Worker`, which allows you to build serverless apps that immediately follow the app's deployment process. You can leverage this `Plaoc Worker` to offer various services such as:

- **Middleware Services** ([details](./middleware.md)): Implement protection or secondary processing for APIs.
- **Forwarding Services**: Facilitate connections between apps by acting as a relay service.
- **Local Backend**: Execute time-consuming data processing or computational tasks locally.
- **Firewall**: Filter requests to secure your app.

## Debugging Your Backend

Just click the status bar icon, and you'll be able to access the backend console.

> - On Mac, the status bar icon is located at the top right corner of the screen.
> - For Windows users, the status bar can be found at the bottom right corner of the screen.
