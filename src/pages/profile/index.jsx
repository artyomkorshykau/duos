import { useMemo, useState } from 'react';
import ProgressBar from '@/react/widgets/progress.bar/ui';
import Profile from '@/react/widgets/profile/ui';
import Pagination from '@/react/widgets/pagination/ui';
import Autosave from '@/react/widgets/autosave/ui';
import Carcas from '@/react/components/containers/carcas';
import Services from '@/react/widgets/services/ui';
import School from '@/react/widgets/school/ui'

export default function ProfilePage() {

  const [ step, setStep ] = useState( 'Профиль' )
  const [ title, setTitle ] = useState( 'Профиль' )
  const [ description, setDescription ] = useState( 'Эти данные станут частью вашего профиля и помогут продвижению' )

  const nextStep = () => {

    if( step === 'Профиль' ) {

      setStep( 'Услуги' )
      setTitle('Услуги')
      setDescription('В каких направлениях и какие услуги вы готовы оказывать вашим будущим клиентам')


    }

    if( step === 'Услуги' ) {

      setStep( 'Школа' )
      setTitle('Школа')
      setDescription('Если у вас нет собственной школы или курса переходите к следующему шагу')

    }

    window.scrollTo(0, 0)

  }

  const content = useMemo(() => {

    if (step === 'Профиль') {

      return (

        <Profile />

      )

    }
    if (step === 'Услуги') {

      return (

        <Services />
      )

    }

    if ( step === 'Школа' ) {

      return (

        <School/>

      )

    }

  }, [ step ])

  return (

    <main id = {``} className = {``}>

      <Carcas

        authorized = { true }

      >

        <div className = { `flex flex-column` }>

          <ProgressBar

            title = { title }
            description = { description }
            activeStep = { step }

          />
          { content }
          <Autosave />
          <Pagination nextStep = { nextStep }/>

        </div>

      </Carcas>

    </main>

  );

}