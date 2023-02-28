Zotistics is UCI's premier grade distribution analysis tool! We use the PeterPortal Public API to consolidate UCI grade data by professors, classes, quarters, and more.

🔨 Built with:

- [PeterPortal API](https://github.com/icssc-projects/peterportal-public-api)
- [GraphQL](https://graphql.org/) with [Apollo](https://www.apollographql.com/)
- [Next.JS](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Headless UI](https://headlessui.dev/)
- [React Select](https://react-select.com/home)
- [nivo](https://nivo.rocks/bar)
- [MDX](https://mdxjs.com/) & [gray-matter](https://github.com/jonschlinkert/gray-matter)
- [Doggles](https://github.com/icssc-projects/Zotistics/blob/main/src/assets/doggles.png)

## Documentation

### Setting up your development environment

1. Clone the Zotistics repository.

```console
$ git clone https://github.com/icssc-projects/Zotistics.git
```

2. Navigate to the root directory and install its dependencies.

```console
$ cd Zotistics
$ pnpm install
```

3. Start the development server.

```console
$ pnpm dev
```

4. Zotistics should load locally at http://localhost:3000/

## Where does the data come from?

The data displayed on Zotistics is retrieved from the [PeterPortal API](https://github.com/icssc-projects/peterportal-public-api). Please report any data related issues directly to the [PeterPortal API repo](https://github.com/icssc-projects/peterportal-public-api/issues).

## Bug Report

🐞 If you encountered any issues or bug, please open an issue @ https://github.com/icssc-projects/Zotistics/issues/new

## Other Disclaimer

✅ Although PeterPortal API data is consolidated directly from official UCI sources, this application is by all means, not an official UCI tool. We stride to keep our data as accurate as possible with the limited support we have from UCI. Please take that into consideration while using this website.

[![Powered by Vercel](https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg)](https://vercel.com/?utm_source=icssc&utm_campaign=oss)
