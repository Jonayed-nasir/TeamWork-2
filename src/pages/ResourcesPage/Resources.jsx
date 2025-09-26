import React from 'react'
import ResourcesPageHeroSection from './ResourcesPageHeroSection'
import ReportsAnalysisSection from './ReportsAnalysisSection'
import ResourcesPageBlogSection from './ResourcesPageBlogSection'
import ResourcePageCards from './ResourcePageCards'
import ResourcePageLastSection from './ResourcePageLastSection'
function Resources() {
  return (
    <>
      <ResourcesPageHeroSection/>
      <ReportsAnalysisSection/>
      <ResourcesPageBlogSection/>
      <ResourcePageCards/>
      <ResourcePageLastSection/>
    </>
  )
}

export default Resources
