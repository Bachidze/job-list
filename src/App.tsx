import './App.css';
import data from './data.json';

function App() {



  console.log(data)
  return (
    <>
      <header className='max-w-[1440px] w-[90%] m-auto relative top-[120px]'>
        <div className='min-w-[327px] flex items-center justify-between h-auto bg-white rounded-[5px] p-5'
          style={{ boxShadow: '0px 15px 20px -5px rgba(13.37, 113.17, 130.35, 0.15)' }}
        >
          <h1>gio</h1>
          <h1>Clear</h1>
        </div>
      </header>
      <main className='max-w-[1440px] w-[90%] m-auto relative top-[200px]'>
        {data.map(job => (
          <div key={job.id}>
            <div className='flex flex-col bg-white mb-10 rounded-[5px] p-6 gap-4'
                style={{ boxShadow: '0px 15px 20px -5px rgba(13.37, 113.17, 130.35, 0.15)' }}
                >
                <img src={job.logo} alt={job.company} />
                <h2 className='text-[#5CA5A5] font-bold text-[13px]'>{job.company}</h2>
                <h3 className='text-[#2B3939] text-[15px] font-bold leading-[24px]'>{job.position}</h3>
                <p className='text-[#7C8F8F] text-[16px] leading-6 after:border flex flex-col after:mt-[15px]'>{job.postedAt} • {job.contract} • {job.location}</p>
                <ul className='flex flex-wrap gap-5 cursor-pointer'>
                  {job.languages.map(language => (
                    <li className='bg-[#bbd4d4] pl-[11px] pr-[11px] pt-[9px] pb-[9px] rounded-[4px] text-[#5CA5A5] font-bold' key={language}>{language}</li>
                  ))}
                </ul>
            </div>
          </div>
        ))}
      </main>
    </>
  );
}

export default App;
