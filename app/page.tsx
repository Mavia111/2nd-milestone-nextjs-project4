import { Anc } from "./components/anchor";
import { Heading1, Heading2, Heading3 } from "./components/headings";
import { Para, SubPara } from "./components/para";



export default function Home() {
    return (
      <div>
        <div className="row">
        <div className="pad-5">
            <Heading1 name="Welcome To our Website"/>
            <Para name="Use power words like epic, mastering, expert, etc." />
        </div>
        </div>

        <section className="about_sec">
          <div className="sub_div">
              <Heading2 name="About Us"/>
              <SubPara name="Welcome to The Bloggers, your go-to destination for insightful, engaging, and thought-provoking content. We are a passionate team of writers dedicated to sharing stories, tips, and perspectives on a variety of topics, from lifestyle and travel to technology and personal growth. Our mission is to inspire, inform, and spark meaningful conversations among our readers. Whether you're seeking expert advice, the latest trends, or just a fresh perspective, you'll find it here. Join our community, explore our posts, and let us be a part of your daily reading journey!"/>
          </div>
        </section>
        <section className="blogs_sec">
          <div className="sub_div" style={{padding:'0% 3% 7% 3%'}}>
              <Heading2 name="Blogs"/>
              <div>
              <div className="col-3">
                <div className="card">
               <Heading3 name="Getting Started with Next.js: A Beginner’s Guide" />
               <Para name="Next.js is a powerful React framework that enables developers to build fast,...."/>
               <Anc link="/blogs" />            
                </div>
              </div>

              <div className="col-3">
              <div className="card">
               <Heading3 name="Exploring Next.js Data Fetching:"/>
               <Para name="Next.js offers several methods for fetching data in your application. Under...."/>
               <Anc link="/blogs"  />            
              </div>
              </div>
              <div className="col-3">
              <div className="card">
               <Heading3 name="How to Add Authentication in a Next.js Application"/>
               <Para name="Adding authentication to your Next.js application is essential for many modern...."/>
               <Anc link="/blogs"  />            
              </div>
              </div>
              
          </div>
          </div>
        </section>

       
      </div>
    );
}
