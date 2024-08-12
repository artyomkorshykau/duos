import { useMemo, useState } from 'react';
import ProgressBar from '@/react/widgets/progress.bar/ui';
import Profile from '@/react/widgets/profile/ui';
import Pagination from '@/react/widgets/pagination/ui';
import Autosave from '@/react/widgets/autosave/ui';
import Carcas from '@/react/components/containers/carcas';
import Services from '@/react/widgets/services/ui';
import School from '@/react/widgets/school/ui'
import Document from '@/react/widgets/document/ui';
import Publications from "@/react/widgets/publications/ui";
import Quiz from "@/react/widgets/quiz/ui";
import { useQuiz } from "@/react/widgets/quiz/model";
import { steps } from "@/constants/quiz.steps";

export default function ProfilePage() {

  const [ step, setStep ] = useState( steps.questionnaire )
  const [ title, setTitle ] = useState( 'Профиль' )
  const [ description, setDescription ] = useState( 'Эти данные станут частью вашего профиля и помогут продвижению' )
  const {

    buttonTitle,
    handleButtonAction,
    status

  } = useQuiz( { setStep } )

  const nextStep = () => {

    if( step === steps.profile ) {

      setStep( steps.service )
      setTitle('Услуги')
      setDescription('В каких направлениях и какие услуги вы готовы оказывать вашим будущим клиентам')


    }

    if( step === steps.service ) {

      setStep( steps.school )
      setTitle('Школа')
      setDescription('Если у вас нет собственной школы или курса переходите к следующему шагу')

    }

    if( step === steps.school ) {

      setStep( steps.documents )
      setTitle('Документы')
      setDescription('Сертификаты, отзывы и прочая информация относительно всего, что вы заполняли ранее')

    }

    if( step === steps.documents ) {

      setStep( steps.publications )
      setTitle('Публикации')
      setDescription('Сертификаты, отзывы и прочая информация относительно всего, что вы заполняли ранее')

    }

    window.scrollTo(0, 0)

  }

  const content = useMemo(() => {

    if ( step === steps.profile ) {

      return (

        <Profile />

      )

    }
    if ( step === steps.service ) {

      return (

        <Services />
      )

    }

    if ( step === steps.school ) {

      return (

        <School/>

      )

    }

    if ( step === steps.documents ) {

      return (

        <Document />

      )

    }

    if ( step === steps.publications ) {

      return (

        <Publications />

      )

    }

  }, [ step ])

  return (

    <main id = {``} className = {`${ step === steps.questionnaire && 'flex items-center h-dvh' }`}>

      <Carcas

        authorized = { true }

      >

        { step === steps.questionnaire

        ? <Quiz

          buttonTitle = { buttonTitle }
          handleButtonAction = { handleButtonAction }
          status = { status }

          />
        : <div className={ `flex flex-column` }>

          <ProgressBar

            title={ title }
            description={ description }
            activeStep={ step }

          />
          { content }
          <Autosave/>
          <Pagination nextStep={ nextStep } activeStep={ step }/>

        </div>

        }

      </Carcas>

    </main>

  );

}