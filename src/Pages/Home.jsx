import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Search from '../Components/Search'
import IntroPost from '../Components/IntroPost'
import Blogs from '../Components/Blogs'
import Footer from '../Components/Footer'
import GlobalApi from '../Services/GlobalApi'

function Home() {
    const [post,setPost]=useState([])
    useEffect(()=>{
        getPost();
    },[])
    const getPost=()=>{
        GlobalApi.getPost.then(resp=>{
            const result=resp.data.data.map(item=>({
                id:item.id,
                title:item.attributes.title,
                desc:item.attributes.description,
                tag:item.attributes.tag,
                coverImage:item.attributes.coverImage.data.attributes.url,
            }));
            setPost(result)
        })
    }
  return (
    <div className='p-[20px]'>
       {/* Header */}
        <Header/>
       {/* Search */}
        <Search/>
        {/* IntroPost */}
      {post.length>0? <IntroPost post={post[0]} />:null}
        {/* Blogs */}
      {post.length>0?  <Blogs posts={post}/>:null}
        {/* Footer */}
        <Footer/>
    </div>
  )
}

export default Home