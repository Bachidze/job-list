import  { useState } from 'react';
import './App.css';
import data from './data.json';

interface Job {
  id: number;
  logo: string;
  company: string;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
}

function App(): JSX.Element {
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

  const handleLanguageClick = (language: string): void => {
    if (selectedLanguages.includes(language)) {
      setSelectedLanguages(selectedLanguages.filter((lang) => lang !== language));
    } else {
      setSelectedLanguages([...selectedLanguages, language]);
    }
  };

  const clearSelectedLanguages = (): void => {
    setSelectedLanguages([]);
  };

  const filteredData = selectedLanguages.length
    ? data.filter((job: Job) => selectedLanguages.every((lang) => job.languages.includes(lang)))
    : data;

  return (
    <>
      <header className='max-w-[1440px] w-[90%] m-auto relative top-[120px]'>
        <div className='min-w-[327px] flex items-center justify-between h-auto bg-white rounded-[5px] p-5 xl:min-h-[72px]' style={{ boxShadow: '0px 15px 20px -5px rgba(13.37, 113.17, 130.35, 0.15)' }}>
          <div className='flex flex-wrap items-center'>
            {selectedLanguages.map((lang: string, index: number) => (
              <span key={index} className='text-[#5CA5A5] font-bold mr-2'>{lang}</span>
            ))}
          </div>
          <div>
            {selectedLanguages.length > 0 ? (
              <button className='text-[#5CA5A5] font-bold' onClick={clearSelectedLanguages}>Clear</button>
            ) : (
              <h1>No filters selected</h1>
            )}
          </div>
        </div>
      </header>
      <main className='max-w-[1440px] w-[90%] m-auto relative top-[200px] mb-[300px]'>
        {filteredData.map((job: Job) => (
          <div key={job.id}>
            <div className='flex flex-col bg-white mb-11 rounded-[5px] p-6 gap-4 md:flex-row md:items-center md:justify-between md:gap-[20px] xl:pl-10 xl:pr-10 xl:pt-8 xl:pb-8' style={{ boxShadow: '0px 15px 20px -5px rgba(13.37, 113.17, 130.35, 0.15)' }}>
             <div className='md:flex md:items-center  md:gap-6'>

             <div className='relative bottom-[50px] md:bottom-0'>
                    <img className='w-[48px] h-[48px] md:w-[88px] md:h-[88px] objectf' src={job.logo} alt={job.company} />
              </div>
                <div className='relative bottom-[40px] flex  flex-col gap-4  md:relative md:bottom-0 md:self-start md:justify-start'>
                    <h2 className='text-[#5CA5A5] font-bold text-[13px] md:text-[15px] xl:text-[18px] xl:leading-[16px]'>{job.company}</h2>
                    <h3 className='text-[#2B3939] text-[15px] font-bold leading-[24px] md:text-[18px] xl:text-[22px] xl:leading-[22px]'>{job.position}</h3>
                    <div className='flex gap-3 md:gap-4 xl:gap-7'>
                    <p className='text-[#7C8F8F] text-[16px] leading-6 after:border flex flex-col after:mt-[35px] md:after:hidden md:text-[17px] xl:text-[18px]'>{job.postedAt} • </p>
                    <p className='text-[#7C8F8F] text-[16px] leading-6 after:border flex flex-col after:mt-[35px] md:after:hidden md:text-[17px] xl:text-[18px]'>{job.contract} • </p>
                    <p className='text-[#7C8F8F] text-[16px] leading-6 after:border flex flex-col after:mt-[35px] md:after:hidden md:text-[17px] xl:text-[18px]'>{job.location} •</p>
                    </div>
                </div>

             </div>
              <div className='relative bottom-[20px] md:bottom-0'>
                <ul className='flex flex-wrap gap-5 cursor-pointer'>
                  {job.languages.map((language: string) => (
                    <li
                      className={`bg-[#bbd4d4] pl-[11px] pr-[11px] pt-[9px] pb-[9px] rounded-[4px] text-[#5CA5A5] font-bold ${selectedLanguages.includes(language) ? 'bg-blue-500' : ''}`}
                      key={language}
                      onClick={() => handleLanguageClick(language)}
                    >
                      {language}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </main>
      <footer>.</footer>
    </>
  );
}

export default App;
