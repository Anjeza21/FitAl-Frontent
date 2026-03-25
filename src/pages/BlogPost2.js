import React from "react";
import "./BlogPost.css";

function BlogPost2() {
  return (
    <>
     
      <section className="pjesa1 py-5 bg-dark text-white text-center">
        <div className="container">
          <h1 className="display-4 fw-bold">BLOG POST</h1>
        </div>
      </section>
      
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="content-area mt-5">
                <div className="col-lg-8"> 
          <div className="main-blog-card shadow-sm bg-white">
            <div className="position-relative">
              <img src="/img9.jpg" className="img-fluid margin:5px" alt="Drupal 9" />
              <div className="category-tag">DEVELOPMENT</div>
            </div> 
          </div> 
          </div>
                <h2 className="fw-bold mb-4">Three Advantages of WordPress</h2>
                
                <h4 className="fw-bold mb-3">Mobile Responsiveness</h4>
                <p className="text-secondary mb-4">
                  Most of us look up sites on our smartphones when we’re out. We expect a site to load quickly and to look good on the smaller screen. 
                  Chances are you’ve come across a website that wasn’t easy to navigate on your smartphone screen. 
                  When that happens, we are likely to leave the site and look elsewhere.
                </p>

                <h4 className="fw-bold mb-3">Versatile</h4>
                <p className="text-secondary mb-4">
                  Your business is unique, and your website should be too. Thanks to different themes, your WordPress site can help capture your brand and share it with the world. 
                  WordPress developers have created themes to showcase images, products, services, and more.
                </p>
                <p className="text-secondary mb-4">
                  In addition to the various themes which can craft the layout of your site, WordPress allows developers to create plugins. 
                  These plugins can help you ensure you are using good SEO methods, make it easy to tweet your latest blog posts or help you build a custom contact form.
                </p>

                <h4 className="fw-bold mb-3">Easy to Use</h4>
                <p className="text-secondary mb-4">
                 All of the benefits of a WordPress site wouldn’t mean much if they were hard to use. Even if you’re not a tech expert, WordPress makes building a site simple. At its most basic, WordPress allows you to choose a theme and then start uploading content such as images, copy, and blog posts. For businesses that prefer a customer solution, WordPress also allows customization. This often requires more technical knowledge as coding is required.

                 WordPress sites can be edited from anywhere. You can write a blog post from your phone while waiting for appetizers and run updates from your home computer. The interface is user-friendly, as is the mobile app. Plus, if you can have multiple users so your team can access the site as necessary to make changes or upload new content.

                 Your website is a vital part of your online presence. Make sure it represents you and your brand. Whether you’re in the market for a new website or considering revamping your current site, consider trying WordPress.

                 If you’d like to learn more about how a WordPress-based website can help you better communicate with your target audience, drop us a line. We’d love to discuss how our experience with WordPress has allowed us to craft custom solutions for our neighbors. We work with our neighbors to determine their needs and offer everything from design and copywriting services to SEO. Visit our website for more information.
                </p>

                <div className="my-5">
                  <img src="/img11.png" className="img-fluid rounded shadow-sm" alt="Analysis" />
                </div>

                
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogPost2;