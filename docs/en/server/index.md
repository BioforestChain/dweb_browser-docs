# Plaoc Worker

::: warning
The programmable backend is in its infancy and could face significant changes.
:::

In order to implement the design concept of open security and local data first, the 'Plaoc Worker' service is designed to completely control the data in the hands of users,
No longer dependent on the server. This will also help to further strengthen the cooperation between applications.

Each 'Plaoc App' will carry a programmable backend of'Plaoc Worker', which can help you build serverless applications and immediately follow the APP deployment.
You can provide a series of services based on this 'Plaoc Worker', such:

- [Middleware service](./middleware.md), do some protection for some API, or secondary processing.
- Forwarding service, providing forwarding service between apps and connecting each other.
- Used as a local backend to perform some time-consuming data processing or computing tasks.
- Firewall, for some requests to do filtering.
