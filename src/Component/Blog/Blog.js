import React from "react"
import "../Portfolio/Portfolio.css"
import "../Blog/Blog.css"
import Card from "./Card"
import BlogApi from "./BlogApi"

const Blog = () => {
  return (
    <>
      <section className='Portfolio Blog' id='blog'>
        <div className='container'>
          <div className='heading text-center'>
            <h4>VISIT MY BLOG AND KEEP YOUR FEEDBACK</h4>
            <h1>My Blog</h1>
          </div>

          <div className='content grid'>
            {BlogApi.map((value, index) => {
              return <Card key={index} image={value.image} date={value.date} title_one={value.title_one} title_two={value.title_two} title_three={value.title_three} title_four={value.title_four} title_five={value.title_five} title_six={value.title_six}
              title_seven={value.title_seven} title_eight={value.title_eight} title_nine={value.title_nine} title_ten={value.title_ten}
              desc_one={value.desc_one} desc_two={value.desc_two} desc_three={value.desc_three} desc_four={value.desc_four} desc_five={value.desc_five} desc_six={value.desc_six} desc_seven={value.desc_seven} desc_eight={value.desc_eight} 
              desc_nine={value.desc_nine} desc_ten={value.desc_ten}/>
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog