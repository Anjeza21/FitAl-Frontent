import React from "react";
import { Link } from "react-router-dom"


function Blog() {
return (
<>
<section className="pjesa1">
          <h1>Blog</h1>
      </section>
<section className="blog-section py-5 bg-light">
<div className="container">
<div className="row">

{/* Kolona Kryesore (E majta) */}
<div className="col-lg-8">
<div className="main-blog-card shadow-sm bg-white">
  <div className="position-relative">
<img src="/img9.jpg" className="img-fluid" alt="Drupal 9" />
<div className="category-tag">DEVELOPMENT</div>
</div>

<div className="p-4">
<div className="blog-meta-fit mb-2">
<span className="small text-muted">February 12, 2021 _ Fit.Al _ 0 Comments</span>
 </div>
 <h2 className="fw-bold mb-3">What's New With Drupal 9?</h2>
 <p className="text-secondary mb-4">
 One of the primary reasons for a major release is code clean-up. 
Drupal 8 came with a new innovation model where minor releases occur every six months.
</p>
<div className="d-flex justify-content-between align-items-center">
<Link to="../BlogPost">Learn more</Link>
<span className="text-muted small"><i className="bi bi-heart me-1"></i> 256</span>
</div>
 </div>
</div>

<div className="main-blog-card shadow-sm bg-white">
  <div className="position-relative">
<img src="/img8.png" className="img-fluid" alt="Drupal 9" />
<div className="category-tag">DEVELOPMENT</div>
</div>

<div className="p-4">
<div className="blog-meta-fit mb-2">
<span className="small text-muted">_ November 21, 2019_ fit.al_ 0 Comments</span>
 </div>
 <h2 className="fw-bold mb-3">Three Advantages of WordPress</h2>
 <p className="text-secondary mb-4">
 The basic premise of search engine reputation management is to use the following three strategies to accomplish the goal of creating a c
 ompletely positive first page of search engine results for a specific term…
</p>
<div className="d-flex justify-content-between align-items-center">
<Link to="../BlogPost2">Learn more</Link>
<span className="text-muted small"><i className="bi bi-heart me-1"></i> 444</span>
</div>
 </div>
</div>
</div>




 {/* Kolona Anësore (E djathta - Latest News) */}
<div className="col-lg-4 align-items-start">
<h5 className="fw-bold border-bottom pb-2 mb-4">Latest News</h5>

 <div className="d-flex align-items-start mb-4">
          <Link to="/BlogPost">
    <img src="/img9.jpg" className="rounded me-3" style={{width: '80px', height: '60px', objectFit: 'cover'}} alt="" />
    </Link>
          <div>
            <h6 className="fw-bold mb-1 small">What's New With Drupal 9?</h6>
            <p className="text-muted extra-small mb-0">February 12, 2021</p>
          </div>
        </div>

 {/* Lajmi i vogël 2 */}
<div className="d-flex align-items-start mb-4">
  <Link to="/BlogPost2">
 <img src="/img8.png" className="rounded me-3" style={{width: '80px', height: '60px', objectFit: 'cover'}} alt="" />
 </Link>
 <div>
 <h6 className="fw-bold mb-1 small">Three Advantages of WordPress</h6>
 <p className="text-muted extra-small mb-0">November 21, 2019</p>
 </div>
 </div>
 </div>

 </div>
 </div>

</section>

 </>
);
}

export default Blog; 