import { Heading1, Heading2, Heading3 } from "../components/headings";
import { SubPara } from "../components/para";

export default function About(){
    return(
        <div className="p-5">
        <Heading1 name="Blogs" />
        <Heading2 name="Getting Started with Next.js: A Beginner’s Guide"/>
        <Heading3 name="Introduction:"/>
        <SubPara name="Next.js is a powerful React framework that enables developers to build fast, scalable, and SEO-friendly web applications. If you're new to Next.js, this guide will walk you through the basics of setting up your first project, understanding its key concepts, and building your first Next.js app." />

        <Heading3 name="Key Sections:"/>
        <Heading3 name="What is Next.js?"/>
        <SubPara name="A brief overview of Next.js and its core features (SSR, SSG, routing, etc.)."/>
        <Heading3 name="Setting Up a Next.js Project"/>
        <SubPara name="Step-by-step instructions for creating a Next.js app using create-next-app."/>
        <SubPara name="Initial project structure."/>
        <Heading3 name="Building Pages in Next.js"/>
        <SubPara name="Introduction to Next.js routing with pages directory."/>
        <SubPara name="Static pages vs dynamic pages."/>
        <Heading3 name="Running the Development Server"/>
        <SubPara name="Running and testing your app with npm run dev."/>
        <Heading3 name="Deploying to Vercel"/>
        <SubPara name="How to deploy your Next.js project to Vercel with minimal setup."/>
        <Heading3 name="Conclusion:"/>
        <SubPara name="Wrap up with the benefits of using Next.js for web development and suggest next steps (like exploring API routes, dynamic routing, or data fetching methods)."/>
         

        <Heading2 name="Exploring Next.js Data Fetching: SSR vs. SSG vs. ISR"/>
        <Heading3 name="Introduction:"/>
        <SubPara name="Next.js offers several methods for fetching data in your application. Understanding when to use Server-Side Rendering (SSR), Static Site Generation (SSG), and Incremental Static Regeneration (ISR) can help you optimize performance and SEO. In this post, we’ll compare these strategies and explore their use cases." />

        <Heading3 name="Key Sections:"/>
        <Heading3 name="What is Server-Side Rendering (SSR)?"/>
        <SubPara name="Explanation of how SSR works in Next."/>
        <SubPara name="Example of using getServerSideProps for SSR."/>
        <SubPara name="Benefits of SSR for dynamic content."/>
        <Heading3 name="What is Static Site Generation (SSG)?"/>
        <SubPara name="Explanation of SSG and when it’s the best choice for your project"/>
        <SubPara name="Example of using getStaticProps for SSG."/>
        <SubPara name="Benefits of SSG for static content and SEO."/>
        <Heading3 name="What is Incremental Static Regeneration (ISR)?"/>
        <SubPara name="Introduction to ISR and how it combines the best of SSR and SSG."/>
        <SubPara name="Example of using revalidate in getStaticProps."/>
        <SubPara name="How ISR enables real-time content updates without rebuilding the entire site."/>
        <Heading3 name="Choosing the Right Data Fetching Strategy"/>
        <SubPara name="Comparison of SSR, SSG, and ISR based on use cases (e.g., blog, e-commerce, dashboard)."/>
        <Heading3 name="Conclusion:"/>
        <SubPara name="Summarize when to use each method based on your needs and project requirements, helping developers decide the best data-fetching approach."/>
         
        <Heading2 name="How to Add Authentication in a Next.js Application"/>
        <Heading3 name="Introduction:"/>
        <SubPara name="Adding authentication to your Next.js application is essential for many modern web apps. In this guide, we'll walk you through how to implement authentication using a popular solution like NextAuth.js, which integrates seamlessly with Next.js." />

        <Heading3 name="Key Sections:"/>
        <Heading3 name="What is NextAuth.js?"/>
        <SubPara name="Brief introduction to NextAuth.js and why it’s a great choice for Next.js apps."/>
        <SubPara name="Benefits like built-in OAuth providers, JWT, and session management."/>
        <Heading3 name="Installing NextAuth.js in Your Next.js Project"/>
        <SubPara name="Installation and setup of next-auth package."/>
        <SubPara name="Create a simple authentication provider"/>
        <Heading3 name="Setting Up OAuth Providers (Google, GitHub, etc.)"/>
        <SubPara name="How to configure OAuth authentication for Google, GitHub, or other providers."/>
        <Heading3 name="Handling Sessions in Next.js"/>
        <SubPara name="Using the useSession hook to manage authenticated sessions in your app."/>
        <SubPara name="Protecting pages with getSession."/>
        <Heading3 name="Securing API Routes"/>
        <SubPara name="Example of protecting API routes using NextAuth’s getSession method."/>
        
        <Heading3 name="Conclusion:"/>
        <SubPara name="Highlight the ease of implementing secure authentication in Next.js with NextAuth.js and suggest further enhancements like email/password authentication or custom providers."/>
         
          </div>
          
    );}