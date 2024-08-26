import expert from '@/service/expert.js'
import locations from '@/service/locations.js'
import QuizProgress from '@/constants/quiz.progress'

const profileActions = {

  getProfile: async ( store ) => {

    try {

      const data = await expert.getExpert()

      if ( data && data.success ) {

        store.setState({
          profile: {

            ...store.state.profile,
            firstName: data.profile.temp.first_name,
            lastName: data.profile.temp.last_name,
            surName: data.profile.temp.mid_name,
            birthDate: data.profile.temp.birthday,
            gender: data.profile.temp.gender,
            nickName: data.profile.temp.pseudonym,
            taxStatus: data.profile.temp.tax_status,
            taxName: data.profile.temp.tax_name,
            taxIIN: data.profile.temp.tax_inn,
            country: store.state.profile.countries.find((item) => item.id === data.profile.temp.country_id),
            city: store.state.profile.cities.find((item) => item.id === data.profile.temp.city_id),
            phoneNumber: data.profile.temp.phone,
            email: data.profile.temp.email,
            progress: 1
          },
          
          publications: {...store.state.publications, ...data.publications.temp }
          
        });

        if ( data.profile.temp.length === 0 ) {

          store.setState({ quiz: { ...store.state.quiz, progress: QuizProgress.begin }});

        } else if (data.profile.temp && data.services.temp.length === 0) {

          store.setState({ quiz: { ...store.state.quiz, progress: QuizProgress.continue }});

        } else if (data.services.temp && data.values.temp.length === 0) {

          store.setState({ quiz: { ...store.state.quiz, progress: QuizProgress.continue }});

        } else if (data.values.temp && data.docs.temp.length === 0) {

          store.setState({ quiz: { ...store.state.quiz, progress: QuizProgress.continue }});

        } else if (data.docs.temp && data.publications.temp.length === 0) {

          store.setState({ quiz: { ...store.state.quiz, progress: QuizProgress.continue }});

        }

        store.setState({ quiz: { ...store.state.quiz, isLoading: true }});

        store.setState({ data: data });

      } else {

        console.error( 'Ошибка загрузки данных эксперта', data.message )

      }

    } catch ( error ) {

      console.error( 'Ошибка сети или сервера:', error )

    }

  },

  setFirstName: (store, firstName) => {

    store.setState({ profile: { ...store.state.profile, firstName } })

  },

  setLastName: (store, lastName) => {

    store.setState({ profile: { ...store.state.profile, lastName } })

  },

  setSurName: (store, surName) => {

    store.setState({ profile: { ...store.state.profile, surName } })

  },

  setBirthDate: (store, birthDate) => {

    store.setState({ profile: { ...store.state.profile, birthDate } })

  },

  setGender: (store, gender) => {

    store.setState({ profile: { ...store.state.profile, gender } })

  },

  setNickName: (store, nickName) => {

    store.setState({ profile: { ...store.state.profile, nickName } })

  },

  setTaxStatus: (store, taxStatus) => {

    store.setState({ profile: { ...store.state.profile, taxStatus } })

  },

  setTaxName: (store, taxName) => {

    store.setState({ profile: { ...store.state.profile, taxName } })

  },

  setTaxIIN: (store, taxIIN) => {

    store.setState({ profile: { ...store.state.profile, taxIIN } })

  },

  setCountry: (store, country) => {

    store.setState({ profile: { ...store.state.profile, country } })

  },

  setCity: (store, city) => {

    store.setState({ profile: { ...store.state.profile, city } })

  },

  setPhoneNumber: (store, phoneNumber) => {

    store.setState({ profile: { ...store.state.profile, phoneNumber } })

  },

  setEmail: (store, email) => {

    store.setState({ profile: { ...store.state.profile, email } })

  },

  setProfileProgress(store, progress) {

    const profile = JSON.parse(localStorage.getItem('profile'))

    localStorage.setItem('profile', JSON.stringify({ ...profile, progress }))
    store.setState({ profile: { ...store.state.profile, progress } })

  },

  async sendProfile(store) {

    await expert.sendExpertDataStep1(store.state.profile).then((res) => {

      store.setState({ profile: { ...store.state.profile, errors: res.errors } })

    })

  },

  getCountries: async ( store ) => {

    try {

      const data = await locations.getCountries(null, null)

      if ( data && data.success ) {

        store.setState({
          profile: {

            ...store.state.profile,
            countries: data.countries.map((country) => ({
              id: country.id,
              value: country.name,
              label: country.name,
            })),
            isLoading: true

          },
        });

      } else {

        console.error( 'Ошибка загрузки стран', data.message )

      }

    } catch ( error ) {

      console.error( 'Ошибка сети или сервера:', error )

    }

  },

  getCities: async ( store ) => {

    try {

      const data = await locations.getCities(1, null, null)

      if ( data && data.success ) {

        store.setState({
          profile: {

            ...store.state.profile,
            cities: data.cities.map((city) => ({
              id: city.id,
              value: city.name,
              label: city.name,
            })),
          },

        });

      } else {

        console.error( 'Ошибка загрузки стран', data.message )

      }

    } catch ( error ) {

      console.error( 'Ошибка сети или сервера:', error )

    }

  },

}

export default profileActions


