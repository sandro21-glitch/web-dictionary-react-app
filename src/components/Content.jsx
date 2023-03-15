import React, { useState } from 'react'
import { GoLinkExternal } from 'react-icons/go'
import Error from './Error'

const Content = ({words}) => {
    

  return (
    <div>
      {words.map((word,index) => {
        if (!word || word.length === 0) {
          return <Error key={index} />;
        }
        return (
         <article key={index}>
              {/* wrapper */}
              <div className='flex justify-between items-center mb-5'>
                <div>
                  <h3 className='text-4xl font-bold'>{word.word}</h3>
                  <span className='text-boldPurple'>{word.phonetic ? word.phonetic : ''}</span>
                </div>
                <button type='button' className='text-2xl font-bold flex items-center justify-center bg-lightPurple text-boldPurple w-14 h-14 rounded-full' onClick={(e) => {
                  const audioElement = e.target.querySelector('audio');
                  if (word.phonetics && word.phonetics.length > 0 && word.phonetics[0].audio) {
                      audioElement?.play();
                  }}}>
                  {word.phonetics && word.phonetics.length > 0 && word.phonetics[0].audio ? <audio src={word.phonetics[0].audio} /> : null}
                  ▷
              </button>
              </div>
              {/* meanings */}
                {word.meanings.map((meaning, index) => {
                  return (
                    <div key={index}>
                      <div className='flex items-center mb-5'>
                        <p className='text-xl font-bold italic'>{meaning.partOfSpeech}</p>
                        <div className='ml-4 w-full bg-gray-300 h-[.1px]'></div>
                      </div>
                      <ul>
                      <h6 className='text-gray-400 text-xl mb-2'>Meaning</h6>
                        {meaning.definitions.map((def, index) => {
                          return (
                            <li key={index} className='mb-2 text-lg list-disc marker:text-boldPurple'>{def.definition}</li>
                          )
                        })}
                      </ul>
                        <div className='my-5'>
                        <h6 className='text-xl text-gray-500'>Synonyms</h6>
                          {meaning.synonyms.map((synonym, index) => {
                            return (
                                  <a key={index} className='text-boldPurple'>{synonym ? synonym : ''}, </a>
                            )
                          })}
                        </div>
                    </div>
                  )
                })}
                <div className='w-full bg-gray-300 h-[.1px] my-5'></div>
                <div>
                  <p className='text-gray-500'>Source</p>
                  <div className='flex items-center'>
                    <a href={word.sourceUrls[0]} className='underline text-blue-600'>{word.sourceUrls[0]}</a>
                    <a href={word.sourceUrls[0]} className='ml-1 cursor-pointer text-blue-600'><GoLinkExternal /></a>
                  </div>
                </div>
         </article>
          )
      })}  
    </div>
  )
}

export default Content
