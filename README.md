## Description of application
Features:
1. List all doors used a by a real estate company and their buildings
2. Show detailed information for each door (connection status, update timestamp, etc)

## BFF and why we use it
What is BFF:
A BFF (Backend for Frontend) is a layer between the FE and an app's various BE services. For each user interface, there is a corresponding BFF which is specifically tailored to provide the data needed for that interface.

The main reasons we use BFF pattern are:
1. Simplify client-side code - client interfaces with BFF instead of multiple different services
2. Security - BFF can authenticate users and filter data before it is transmitted to the client
3. Decoupling - Changes in backend service won't directly affect client

However, introducing BFFs also has its costs such as higher complexity in architecture and more codebases to manage and monitor. It needs to be weighed carefully before deciding to be used in projects.

## Folder structure
```
|- app
|   |- components // Basic reusable components
|   |- detail // Detailed door page
|   |   └── [id] // Slug of door (path param)
|   |     |- layout.tsx
|   |     └── page.tsx
|   |- layout.tsx
|   |- page.tsx
|   └── StoreProvider.tsx
|- lib // Util functions, Redux store and tests
|- public // Static assets
```

## List of libraries used
- [Next.js](https://nextjs.org/) (bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app))
- [RTK-Query](https://redux-toolkit.js.org/) - state management tool that contains API methods for efficient and simple global store
- [Material-UI](https://mui.com/material-ui/) - React component library that implements Google's [Material Design](https://m2.material.io/)

