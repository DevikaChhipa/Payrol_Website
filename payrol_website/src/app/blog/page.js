"use client";

import BlogbannerSection from "../../../components/blog/BlogBanner";
import BlogSection from "../../../components/blog/Blogsection";



export default function Blog() {
  return (    
    <>
    <div className="bg-[#eef2f5]">
       <BlogbannerSection />
       <BlogSection />
    </div>
    </>
  );
}