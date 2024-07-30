import { useMemo, useState } from 'react';
import ProgressBar from '@/react/widgets/progress.bar/ui';
import Profile from '@/react/widgets/profile/ui';
import Pagination from '@/react/widgets/pagination/ui';
import Autosave from '@/react/widgets/autosave/ui';
import Carcas from '@/react/components/containers/carcas';
import Services from '@/react/widgets/services/ui';

export default function ProfilePage() {

  const [step, setStep] = useState('Profile')

  const nextStep = () => {

    step === 'Profile' && setStep('Services')

  }

  const content = useMemo(() => {

    if (step === 'Profile') {

      return (

        <Profile />

      )

    }
    if (step === 'Services') {

      return (

        <Services />
      )

    }

  }, [ step ])

  return (

    <main id={``} className={``}>

      <Carcas

        authorized = { true }

      >

        <div className = { `flex flex-column` }>

          <ProgressBar />
          { content }
          <Autosave />
          <Pagination nextStep = { nextStep }/>

        </div>

      </Carcas>

    </main>

  );

}