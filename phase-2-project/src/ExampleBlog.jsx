import { useState } from "react";

function ExampleBlog({blog, primary, secondary, tertiary, accent, background, titleFont, bodyFont, handleBackgroundColors, handleHeaderFont, handleBodyFont}) {
    //handles expansion element
    const[isExpanded, setIsExpanded] = useState(false)

 return (
    <div>
        <div className="top-of-blog" style={{backgroundColor: primary}}>
            <h2 style={{color: handleHeaderFont(titleFont)}} className="blog-title">{blog.name}</h2><span onClick={() => setIsExpanded(!isExpanded)} style={{color: handleHeaderFont(titleFont), backgroundColor: accent}} className="expansion">Expand ▼</span>
        </div>
        <div className="bottom-of-blog" style={{backgroundColor: tertiary}}>
            {isExpanded? 
            <p style={{color: handleBodyFont(bodyFont)}}>{blog.content}</p>:
            null}
        </div>
    </div>
 )
}

export default ExampleBlog;