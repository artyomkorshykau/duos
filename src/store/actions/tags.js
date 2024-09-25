import tagsService from '@/service/tags.js'


export const setTags = async( store ) => {
  
  const { tags } = await tagsService.getTagList()
  
  store.setState( { tags } )
  store.actions.updateRender()
  
}
