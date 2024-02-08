import React from 'react'
import './Blog.css'
import BlogPost from './BlogPost'

const Blog = () => {
  return (
    <>
    <div className='theBlog'>
        <div>
           
        </div>
        <div className='theTexts'>
           <BlogPost 
            title="Welcome To Our Online Store"
            content= "Welcome to our online store! Our team is proud to announce that we're now open for business,
            and we look forward to serving you allin the future. 
            If you have any questions about this store or the products found within,
            please don't hesitate to contact us any time. 
           
          
             Our website has been carefully designed to provide you with an amazingly
              flexible online shopping experience, and its ease of navigation is 
              something we think you'll grow to depend on and appreciate. Feel free to browse our entire product catalog, and let us know if you have any questions, comments or concerns about the items housed within. Our team is always ready and willing to 
              assist our customers, and we are happy for your visit.  
           
            When making a purchase in our online store, you will notice how easy
            it is to add products to the shopping cart, review every aspect of your order,
             and enter your payment information in our secure checkout. You should also know
              that we take customer security very seriously and pride ourselves on having our online store powered by 3dcart - a Visa PCI certified ecommerce solution - so you can rest comfortably knowing that your sensitive payment
            info is fully protected, safe and secure at all times.
            We hope you enjoy our wide selection of advanced features including our product wish list, numerous social sharing capabilities as well as our streamlined single page checkout.

             On behalf of our entire team, thanks so much for stopping by. 
             We look forward to providing you with the best possible online shopping 
             experience on the Web.  Have fun, enjoy or growing selection of amazing merchandise 
             and we look forward to speaking with you soon! 
            "/>
        </div>
    </div>
    </>
  ) 
}

export default Blog