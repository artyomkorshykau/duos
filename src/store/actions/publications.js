import expert from '@/service/expert.js'
import { publicationsStateInstance } from '../../../localforage.config.js'

const publicationsActions = {
  
  setProfilePhoto: async( store, files ) => {
    try {
      const publications = await publicationsStateInstance.getItem( 'publications' ) || {}
      
      if ( !publications.categories[ 0 ].photos ) {
        publications.categories[ 0 ].photos = []
      }
      
      publications.categories[ 0 ].photos = [ ...publications.categories[ 0 ].photos, ...files ]
      await publicationsStateInstance.setItem( 'publications', publications )
      
      store.setState( { publications } )
    } catch ( error ) {
      console.error( 'Error setting profile photo:', error )
    }
  },
  
  deleteProfilePhoto: async( store, photoIndex ) => {
    try {
      const publications = await publicationsStateInstance.getItem( 'publications' ) || {}
      
      publications.categories[ 0 ].photos.splice( photoIndex, 1 )
      await publicationsStateInstance.setItem( 'publications', publications )
      
      store.setState( { publications } )
    } catch ( error ) {
      console.error( 'Error deleting profile photo:', error )
    }
  },
  
  setAboutYourselfInfo: async( store, index, text ) => {
    try {
      const publications = await publicationsStateInstance.getItem( 'publications' ) || {}
      
      publications.categories[ 0 ].profileInfo[ index ].text = text
      await publicationsStateInstance.setItem( 'publications', publications )
      
      store.setState( { publications } )
    } catch ( error ) {
      console.error( 'Error setting about yourself info:', error )
    }
  },
  
  getPublication: async( store, expert_id ) => {
    try {
      const { articles } = await expert.articleList( expert_id )
      
      const hasArticles = articles.length >= 3
      
      store.setState( {
        articles,
        publications: {
          ...store.state.publications,
          categories: store.state.publications.categories.map( category =>
            category.id === 1
              ? {
                ...category,
                documentStatus: hasArticles ? 'Filled' : category.documentStatus
              }
              : category
          )
        }
      } )
      
    } catch ( error ) {
      console.error( 'Error getting publications:', error )
    }
  },
  
  deletePublication: async( store, article_id ) => {
    try {
      await expert.deleteArticle( article_id )
      
      const updatedArticles = store.state.articles.filter(
        article => article.id !== article_id
      )
      
      const hasLessThanThreeArticles = updatedArticles.length < 3
      
      store.setState( {
        articles: updatedArticles,
        publications: {
          ...store.state.publications,
          categories: store.state.publications.categories.map( category =>
            category.id === 1
              ? {
                ...category,
                publicationsCards: updatedArticles,
                documentStatus: hasLessThanThreeArticles
                  ? 'NotFilled'
                  : category.documentStatus
              }
              : category
          )
        }
      } )
    } catch ( error ) {
      console.error( 'Error deleting publication:', error )
    }
  },
  
  toggleDocumentStatus: async( store, index, newStatus ) => {
    try {
      const publications = await publicationsStateInstance.getItem( 'publications' ) || {}
      
      publications.categories[ index ].documentStatus = newStatus
      await publicationsStateInstance.setItem( 'publications', publications )
      
      store.setState( { publications } )
    } catch ( error ) {
      console.error( 'Error toggling document status:', error )
    }
  },
  
  setPublicationsProgress: async( store, progress ) => {
    try {
      const publications = await publicationsStateInstance.getItem( 'publications' ) || {}
      
      const updatedPublications = { ...publications, progress }
      await publicationsStateInstance.setItem( 'publications', updatedPublications )
      
      store.setState( { publications: updatedPublications } )
    } catch ( error ) {
      console.error( 'Error setting publications progress:', error )
    }
  },
  
  setPublications: async( store, newPublications ) => {
    try {
      const publications = await publicationsStateInstance.getItem( 'publications' ) || {}
      
      const updatedPublications = { ...publications, ...newPublications }
      
      await publicationsStateInstance.setItem( 'publications', updatedPublications )
      store.setState( { publications: updatedPublications } )
    } catch ( error ) {
      console.error( 'Error setting publications:', error )
    }
  }
}

export default publicationsActions
