import React from 'react'
import { data } from './data'
import CouseCard from './CouseCard'
import "../node_modules/bootstrap/dist/css/bootstrap.css"

const App = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
        <h1 className='text-center my-3'>Mastering the Mind Maze</h1>
        {
        data.map((ele)=>{
          console.log(ele)
          const {id,title,instructor,duration,level,isenrolled,rating,tags,tags2,tags1,thumbnailUrl,discountPrice,orginalPrice}=ele
          return <div className="col-12 col-sm-12 col-md-4 col-lg-4">
            <CouseCard
          Aid={id}
          Atitle={title}
          Ainstructor={instructor}
          Aduration={duration}
          Alevel={level}
          Aisenrolled={isenrolled}
          Arating={rating}
          Atags={tags}
          Atags1={tags1}
          Atags2={tags2}
          AthumbnailUrl={thumbnailUrl}
          AdiscountPrice={discountPrice}
          AorginalPrice={orginalPrice}
          />
          </div>
        })
      }
        </div>
      </div>
    </div>
  )
}

export default App