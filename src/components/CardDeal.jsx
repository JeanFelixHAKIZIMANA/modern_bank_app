import { card } from '../assets'
import styles, { layout } from '../style'
import Button from './Button'

const CardDeal = () => (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a card deal <br className='sm:block hidden' />in few easy steps.</h2>
        <p className={`${styles.paragraph} max-w-[480px] mt-5`} >
        There's only one way under high heaven to get anybody to do anything. Did you ever stop to think of that? Yes, just one way. And that is by making the other person want to do it.
        Do you plan on making other people want to do things the right way?
        </p>
        <Button styles="mt-10"/>
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt='card' className='w-[100%] h-[100%]'/>
      </div>
    </section>
  )

export default CardDeal