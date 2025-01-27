# @plaoc/server

::: warning
The programmable backend is in its early stages and may undergo significant changes.
:::

To adhere to the design philosophy of open security and local data priority, the `Plaoc Worker` service was designed with the aim of putting data completely in the hands of users,
and no longer relying on servers. This will also facilitate further collaboration between applications.

Each `Dweb App` will carry a `Plaoc Worker` programmable backend, which can help you build serverless applications and deploy them immediately with the APP.
You can provide a series of services based on this `Plaoc Worker`, such as:

- [Middleware service](./middleware.md), to protect or reprocess some APIs.
- Forwarding service, providing forwarding services between apps.
- Use as a local backend to perform some time-consuming data processing or computing tasks.
- Firewall, filtering some requests.

### Debugging the backend

Just click the status bar icon to see the backend console.

> The Mac status bar icon is located at the top right of the screen, and the Windows status bar is located at the bottom right of the screen.
