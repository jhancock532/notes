# A Next.js blog with MDX remote

Code copied from example at https://github.com/vercel/next.js/tree/canary/examples/with-mdx-remote

If you'd like to use the same base template, run the following command:

```bash
npx create-next-app --example with-mdx-remote with-mdx-remote-app
```

## Additions

- SCSS
- Prettier

## Known issues

Next remote watch logs errors in the terminal relating to hotreload while running.

MDX Remote component can't be used as a child component of other components without causing a recursion error. This means the `PostPage` component isn't usable.

## Inspiration

A simple, clean blog, many years old - https://evanhahn.com/ (Note use of Buttondown as mailing list provider, a pretty awesome company)
https://blog.cassidoo.co/ - click on tags to filter by that tag. use of obsidian for writing markdown posts

https://www.technologyreview.com/2020/09/03/1007716/digital-gardens-let-you-cultivate-your-own-little-bit-of-the-internet/
