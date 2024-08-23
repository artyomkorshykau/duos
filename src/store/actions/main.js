import expert from "@/service/expert.js";
import QuizProgress from '@/constants/quiz.progress';

const mainActions = {

    getProfile: async ( store ) => {

        try {
    
          const data = await expert.getExpert()
    
          if ( data && data.success ) {

            store.setState({ data: data });
    
            if (data.profile?.temp && data.profile.temp?.length === 0 ) {
    
              store.setState({ quiz: { ...store.state.quiz, progress: QuizProgress.begin }});
    
            } else if (data.profile?.temp && data.services?.temp.length === 0) {
    
              store.setState({ quiz: { ...store.state.quiz, progress: QuizProgress.continue }});
    
            } else if (data.services?.temp && data.values?.temp.length === 0) {
    
              store.setState({ quiz: { ...store.state.quiz, progress: QuizProgress.continue }});
    
            } else if (data.values?.temp && data.docs?.temp.length === 0) {
    
              store.setState({ quiz: { ...store.state.quiz, progress: QuizProgress.continue }});
    
            } else if (data.docs?.temp && data.publications?.temp.length === 0) {
    
              store.setState({ quiz: { ...store.state.quiz, progress: QuizProgress.continue }});
    
            } else if (data.publications?.temp) {

              store.setState({ quiz: { ...store.state.quiz, progress: QuizProgress.end }});

            }
    
            store.setState({ quiz: { ...store.state.quiz, isLoading: true }});

            data.values.temp && data.values.temp.length !== 0 && store.setState({

                school: {
      
                  ...store.state.school,
                  schoolName: data.values.temp.name,
                  courses: data.values.temp.expert_course 
                  
                  ? 
                  
                  data.values.temp.expert_course.map((item, index) => 
                    
                    ({

                      id: index,
                      name: item.name,
                      comment: item.comment
    
                    })) 
                    
                  : 
                    
                  [{id: 0, comment: '', name: ''}],

                  comment: data.values.temp.comment,
                },
      
              });
    
          } else {
    
            console.error( 'Ошибка загрузки данных эксперта', data.message )
    
          }
    
        } catch ( error ) {
    
          console.error( 'Ошибка сети или сервера:', error )
    
        }

    }
}

export default mainActions
