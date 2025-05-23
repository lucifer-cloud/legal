import React from 'react'

function BlogChunk({post}) {
  return (
     <article className="blog_post">
                      <div className="post_img">
                        <a href={post?.link}><img src={post?.image} alt="img" /></a>
                      </div>
                      <div className="post_content_part">
                        <div className="post_content">
                          <div className="post_header">
                            <h6>{post?.date}</h6>
                            <h3 className="post_title">
                              <a href={post?.link}>{post?.title}</a>
                            </h3>
                            <p>{post?.description}</p>
                          </div>
                        </div>
                        <div className="post_footer_flex">
                          <div className="author_flex">
                            <img src={post?.authorImage} alt="author" />
                            <div className="author_details">
                              <h6><a href="#">{post?.authorName}</a></h6>
                              <p>{post?.authorTitle}</p>
                            </div>
                          </div>
                          <div className="share_icon">
                            <a href="#"><i className="ion-android-share-alt"></i></a>
                          </div>
                        </div>
                      </div>
                    </article>
  )
}

export default BlogChunk