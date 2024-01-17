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

I'm very surprised to discover that Maggie Appleton basically uses the same tech stack for her site (https://maggieappleton.com/) as Josh Comeau. In fact, she references him in her Colopholon. So Josh's stack ends up as the be all and end all for React devs who want easy markdown editing to write posts, but full ability to chuck random custom components in the mix as well.

Not sure if I like the ability to mix half written work with finalised work. I'd like to seperate out my content in a similar manner to Maggie, with Essays vs Notes, etc?

By co-incidence, the typography of another well designed blog site looks similar to Maggies. https://www.boag.online/notepad/post/themes-of-klara-and-the-sun-kazuo-ishiguro - I love the soft feel of this site. It doesn't take itself too seriously, and lets the titles gracefully move in.

https://blog.stephaniestimac.com/

Advice on writing - https://css-irl.info/tips-for-writing-for-the-web/
And then another thousand blogs to add the reading list? https://css-irl.info/blogroll/

https://hidde.blog/ - another web developer writing on AI...
https://staging.bsky.app/profile/hbuchel.bsky.social
