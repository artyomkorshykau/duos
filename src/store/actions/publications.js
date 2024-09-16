import expert from '@/service/expert.js'

const publicationsActions = {
  
  setProfilePhoto: ( store, files ) => {
    
    const publications = JSON.parse( localStorage.getItem( 'publications' ) ) || {}
    
    if ( !publications.categories[ 0 ].photos ) {
      
      publications.categories[ 0 ].photos = []
      
    }
    
    publications.categories[ 0 ].photos = [ ...publications.categories[ 0 ].photos, ...files ]
    localStorage.setItem( 'publications', JSON.stringify( publications ) )
    store.setState( { publications } )
    
  },
  
  deleteProfilePhoto: ( store, photoIndex ) => {
    
    const publications = JSON.parse( localStorage.getItem( 'publications' ) ) || {}
    
    publications.categories[ 0 ].photos.splice( photoIndex, 1 )
    localStorage.setItem( 'publications', JSON.stringify( publications ) )
    store.setState( { publications } )
    
  },
  
  setAboutYourselfInfo: ( store, index, text ) => {
    
    const publications = JSON.parse( localStorage.getItem( 'publications' ) ) || {}
    
    publications.categories[ 0 ].profileInfo[ index ].text = text
    localStorage.setItem( 'publications', JSON.stringify( publications ) )
    store.setState( { publications } )
    
  },
  
  getPublication: async( store, expert_id ) => {
    
    const { articles } = await expert.articleList( expert_id )
    
    const hasArticles = articles.length >= 3
    
    store.setState( {
        
        publications: {
          
          ...store.state.publications,
          categories: store.state.publications.categories.map( category =>
            category.id === 1
              
              ? {
                
                ...category,
                publicationsCards: articles,
                documentStatus: hasArticles ? 'Filled' : category.documentStatus
                
              }
              : category
          )
          
        }
        
      }
    )
    
  },
  
  deletePublication: async( store, article_id ) => {
    try {
      await expert.deleteArticle( article_id )
      
      store.setState( {
        publications: {
          ...store.state.publications,
          categories: store.state.publications.categories.map( category =>
            category.id === 1
              ? {
                ...category,
                publicationsCards: category.publicationsCards.filter(
                  publication => publication.id !== article_id
                ),
                documentStatus:
                  category.publicationsCards.filter(
                    publication => publication.id !== article_id
                  ).length === 0
                    ? 'NotFinished'
                    : category.documentStatus
              }
              : category
          )
        }
      } )
    } catch ( error ) {
      console.error( 'Ошибка при удалении статьи:', error )
    }
  },
  
  toggleDocumentStatus: ( store, index, newStatus ) => {
    
    const publications = JSON.parse( localStorage.getItem( 'publications' ) ) || {}
    
    publications.categories[ index ].documentStatus = newStatus
    
    localStorage.setItem( 'publications', JSON.stringify( publications ) )
    store.setState( { publications } )
    
  },
  
  setPublicationsProgress( store, progress ) {
    
    const publications = JSON.parse( localStorage.getItem( 'publications' ) )
    
    localStorage.setItem( 'publications', JSON.stringify( {
      ...publications,
      progress
    } ) )
    store.setState( { profile: { ...store.state.publications, progress } } )
    
  }
  
}

export default publicationsActions