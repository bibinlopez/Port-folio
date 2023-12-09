import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';

const About = () => {
  return (
    <section className='bg-white py-20 ' id='about'>
      <div className='align-element grid md:grid-cols-2 itmes-center gap-16'>
        <img src={aboutSvg} className='w-full h-64' />
        <article>
          <SectionTitle text='What about me?' />
          <p className='text-slate-600 mt-8 leading-loose'>
            I am ambitious and driven. I thrive on challenge and constantly set
            goals for myself, so I have something to strive towards. I am not
            comfortable with settling, and I am always looking for an
            opportunity to do better and achieve greatness.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
