import { useState } from 'react';
import ProgressBar from '@/react/widgets/progress.bar/ui';
import Profile from '@/react/widgets/profile/ui';
import Pagination from '@/react/widgets/pagination/ui';
import Autosave from '@/react/widgets/autosave/ui';
import Carcas from '@/react/components/containers/carcas';

export default function ProfilePage() {

  const [ step, setStep ] = useState( 'Profile' )
  const [ title, setTitle ] = useState( 'Профиль' )
  const [ description, setDescription ] = useState( 'Эти данные станут частью вашего профиля и помогут продвижению' )

  const nextStep = () => {

    if( step === 'Profile' ) {

      setStep( 'Services' )
      setTitle('Услуги')
      setDescription('В каких направлениях и какие услуги вы готовы оказывать вашим будущим клиентам')


    }

    if( step === 'Services' ) {

      setStep( 'School' )
      setTitle('Школа')
      setDescription('Если у вас нет собственной школы или курса переходите к следующему шагу')

    }

    window.scrollTo(0, 0)

  }

  console.log(nextStep.title)

  return (

    <main id = {``} className = {``}>

      <Carcas

        authorized = { true }

      >

        <div className = { `flex flex-column` }>

          <ProgressBar title = { title } description = { description }/>
          <Profile step = { step } />
          <Autosave />
          <Pagination nextStep = { nextStep } />

        </div>

      </Carcas>

    </main>

  );

}