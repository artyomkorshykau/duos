import tagsService from '@/service/tags.js'

const tagsActions = {
  
  setTags: async ( store ) => {
    
    const { tags } = await tagsService.getTagList()
    
    store.setState( { tags } )
    
  }
  
}

export default tagsActions