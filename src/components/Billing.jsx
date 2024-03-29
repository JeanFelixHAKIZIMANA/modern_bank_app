import { apple, bill, google } from '../assets'
import styles, { layout } from '../style'

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className='w-[100%] h-[100%] relative z-[5]'/>
      <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
      <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Easily control your <br className='sm:block hidden' />billing & invoicing.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      There's only one way under high heaven to get anybody to do anything. Did you ever stop to think of that? Yes, just one way. And that is by making the other person want to do it.
      </p>
      <div className='flex flex-row flex-wrap sm: mt-10 mt-6'>
        <a href="www.applestore.com"><img src={apple} alt="apple store" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer' /></a>
        <a href="play.google.com"><img src={google} alt="google play store" className='w-[128px] h-[42px] object-contain ml-5 cursor-pointer' /></a>
      </div>
    </div>
  </section>
  )

export default Billing