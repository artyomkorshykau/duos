const publicationsState = {

  categories: [

    {

      id: 0,
      title: "О себе",
      status: "NotFilled",
      documentStatus: "NotFilled",
      description: 'Загрузите хорошее фото, расскажите о себе и создайте несколько публикаций, тогда наши пользователи смогут найти вас быстрее, а вы получите возможность быстро найти новых читателей и потенциальных клиентов с первых дней',
      profileInfo: [

        {

          id: 0,
          title: 'Фото профиля',
          description: 'Напишите 3-7 предложений о себе, что бы вы хотели сообщить своим будущим клиентам' +
            ' (информация публичная)',
        },

        {

          id: 1,
          title: 'Расскажите о себе',
          description: 'Напишите 3-7 предложений о себе, что бы вы хотели сообщить своим будущим клиентам' +
            ' (информация публичная)',
          placeholder: 'О себе'
        },

        {

          id: 2,
          title: 'Задачи и миссия вашей деятельности',
          placeholder: 'Задачи и миссия'

        },
        {

          id: 3,
          title: 'Укажите основные этические принципы в вашей работе',
          placeholder: 'Этические принципы'

        },
        {

          id: 4,
          title: 'Укажите ваши основные личные принципы работы с клиентом',
          placeholder: 'Принципы работы'

        }

      ],
      photos: null

    },
    {

      id: 1,
      title: "Публикации",
      status: "NotFinished",
      documentStatus: "NotFilled",
      description: 'Создайте до 5 публикаций (статьи, кейсы, тематические посты, интересные материалы о Вашей работе, отзывы). Эти публикации будут размещены в вашем профиле и значительно повлияют на ваше продвижение.',
      publicationsCards: [

        {

          id: 0,
          title: 'Как преодолеть тоску, когда не знаешь, в чем ее причина?',
          status: 'NotFilled',

        },

      ]

    },

  ],

}

const getInitialPublicationsState = () => {

  if ( typeof window !== "undefined" ) {

    const storedPublicationsState = JSON.parse( localStorage.getItem( "publications" ) )

    if ( storedPublicationsState ) {

      return storedPublicationsState

    } else {

      localStorage.setItem( "publications", JSON.stringify( publicationsState ) )

      return publicationsState

    }

  }

  return publicationsState

}

export default getInitialPublicationsState