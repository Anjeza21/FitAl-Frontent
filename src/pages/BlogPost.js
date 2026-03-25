import React from "react";
import "./BlogPost.css"

function BlogPost() {
  return (
    <>
    <section className="pjesa1">
          <h1>BLOG POST</h1>
      </section>
      <section>
        <div className="col-lg-8"> 
          <div className="main-blog-card shadow-sm bg-white">
            <div className="position-relative">
              <img src="/img9.jpg" className="img-fluid margin:5px" alt="Drupal 9" />
              <div className="category-tag">DEVELOPMENT</div>
            </div> 
          </div> 
        </div> 
        <h2 className="fw-bold mb-3">What's New With Drupal 9?</h2>
            <p className="text-secondary mb-4">
             One of the primary reasons for a major release is code clean-up. Drupal 8 came with a new innovation model where minor releases occur every six months. 
             This has accelerated the number of new features being added to Drupal. 
             As features are added, new and improved ways to solve problems are being implemented and code is deprecated. The deprecated code is needed for backward compatibility but a major release 
             of Drupal 9 provides an opportunity to remove this code and anything else that is no longer needed.

             The second reason for a major release relates to third-party dependencies. 
             Now that Drupal integrates with common PHP projects like Twig and Symfony, it needs to adhere to the vendor support lifecycles for these projects. With the release of Drupal 9, 
             we’ll have supported versions of software that will be around for a long time such as Twig 2 and Symfony 4/5.</p>
      <img src="/img10.png" className="img-fluid" alt="Drupal 9" />
      <h2 className="fw-bold mb-3">How to Know If You Are Using Deprecated Code?</h2>
            <p className="text-secondary mb-4">
             There are a few tools that can be used to help identify deprecated code. The first one is drupal-check. This is a command-line utility that you can run against your modules and alert you to instances of deprecated code.
             Another tool will be a “Drupal 9 Readiness,” contributed module expected to ship with Drupal 8.8. 
             This will be a GUI-based tool users and developers can run from within the Drupal user interface to easily determine what it will take to prepare their site for Drupal 9.</p>
<h2 className="fw-bold mb-3">What About Drupal 7?</h2>
            <p className="text-secondary mb-4">
             There are a few tools that can be used to help identify deprecated code. The first one is drupal-check. This is a command-line utility that you can run against your modules and alert you to instances of deprecated code.
             Another tool will be a “Drupal 9 Readiness,” contributed module expected to ship with Drupal 8.8. 
             This will be a GUI-based tool users and developers can run from within the Drupal user interface to easily determine what it will take to prepare their site for Drupal 9.
             
             Unlike upgrading from past versions of Drupal, upgrading from Drupal 8 to Drupal 9 should be simple. 
             Provided your Drupal 8 codebase isn’t using any deprecated code, upgrading will be as easy as getting the latest version and running update.php. </p>

             <img src="/img11.png" className="img-fluid" alt="Drupal 9" />
      </section>
    </>
  );
}

export default BlogPost;