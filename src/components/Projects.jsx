// import './FetchProjects';

import useFetchHook from './FetchProjects';

const Projects = () => {
  const { items, isLoading } = useFetchHook();

  if (isLoading) {
    return (
      <section className='py-20 align-element text-5xl capitalize tracking-wider'>
        <h5>Loading...</h5>
      </section>
    );
  }

  return (
    <div className='bg-slate-200' id='projects'>
      <section className='py-20 align-element'>
        <div className='text-center'>
          <h2 className='text-5xl capitalize tracking-wider'>projects</h2>
          <div className='w-16 h-1 my-4 bg-violet-600 mx-auto'></div>
        </div>
        <div className=' pt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl items-center'>
          {items.map((item) => {
            let { id, title, url, img } = item;

            return (
              <a
                key={id}
                href={url}
                target='_blank'
                className='hover:scale-105 w-full h-full shadow-xl hover:shadow-2xl transition duration-300 rounded-md'
              >
                <img
                  src={img}
                  alt={title}
                  className='rounded-t-md h-64 md:h-70 w-full object-fit'
                  // className='h-70 w-full object-fit'
                />

                <div className='text-center bg-slate-100 h-12 rounded-b-lg'>
                  <div className='py-2'>
                    <h2 className=' block text-center capitalize tracking-wide text-2xl'>
                      {title}
                    </h2>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </section>
    </div>
  );
};
export default Projects;
