import { publicationsStateInstance } from '../../../localforage.config.js'

const publicationsState = {
  
  categories: [
    
    {
      
      id: 0,
      title: 'О себе',
      status: 'NotFilled',
      documentStatus: 'NotFilled',
      description: 'Загрузите хорошее фото, расскажите о себе и создайте несколько публикаций, тогда наши пользователи смогут найти вас быстрее, а вы получите возможность быстро найти новых читателей и потенциальных клиентов с первых дней',
      profileInfo: [
        
        {
          
          id: 0,
          title: 'Фото профиля',
          description: 'Напишите 3-7 предложений о себе, что бы вы хотели сообщить своим будущим клиентам' +
            ' (информация публичная)',
          text: ''
        },
        
        {
          
          id: 1,
          title: 'Расскажите о себе',
          description: 'Напишите 3-7 предложений о себе, что бы вы хотели сообщить своим будущим клиентам' +
            ' (информация публичная)',
          placeholder: 'О себе',
          text: ''
        },
        
        {
          
          id: 2,
          title: 'Задачи и миссия вашей деятельности',
          placeholder: 'Задачи и миссия',
          text: ''
          
        },
        {
          
          id: 3,
          title: 'Укажите основные этические принципы в вашей работе',
          placeholder: 'Этические принципы',
          text: ''
          
        },
        {
          
          id: 4,
          title: 'Укажите ваши основные личные принципы работы с клиентом',
          placeholder: 'Принципы работы',
          text: ''
          
        }
      
      ],
      photos: null
      
    },
    {
      
      id: 1,
      title: 'Публикации',
      status: 'NotFinished',
      documentStatus: 'NotFilled',
      description: 'Создайте до 5 публикаций (статьи, кейсы, тематические посты, интересные материалы о Вашей работе, отзывы). Эти публикации будут размещены в вашем профиле и значительно повлияют на ваше продвижение.',
      publicationsCards: []
      
    }
  
  ]
  
}

const getInitialPublicationsState = async() => {
  
  try {
    
    const storedPublicationsState = await publicationsStateInstance.getItem( 'publications' )
    
    if ( storedPublicationsState ) {
      
      return storedPublicationsState
      
    } else {
      
      await publicationsStateInstance.setItem( 'publications', publicationsState )
      return publicationsState
      
    }
    
  } catch ( error ) {
    
    console.error( 'Error accessing publicationsState state:', error )
    return publicationsState
    
  }
  
}

export default getInitialPublicationsState