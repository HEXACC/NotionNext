import React from 'react'
import BLOG from '@/blog.config'
import DarkModeButton from '@/components/DarkModeButton'

const Footer = ({ title }) => {
  const d = new Date()
  const currentYear = d.getFullYear()
  const copyrightDate = (function() {
    if (Number.isInteger(BLOG.SINCE) && BLOG.SINCE < currentYear) {
      return BLOG.SINCE + '-' + currentYear
    }
    return currentYear
  })()

  return (
    <footer
      className='dark:bg-gray-900 flex-shrink-0 justify-center text-center m-auto w-full leading-6 text-sm p-6 dark:text-gray-400'
    >
      <DarkModeButton/>
      <span>
        <i className='fas fa-copyright' /> {`${copyrightDate}`} <span className='mx-1 animate-pulse'><i className='fas fa-heart' /></span> <a href={BLOG.LINK} className='underline font-bold '>{BLOG.AUTHOR}</a>.<br />
        {BLOG.BEI_AN && <><i className='fas fa-shield-alt' /> <a href='https://beian.miit.gov.cn/' className='mr-2'>{BLOG.BEI_AN}</a><br /></>}
      </span>
    </footer>
  )
}

export default Footer
