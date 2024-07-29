import { useState } from 'react';
import ProgressBar from '@/react/widgets/progress.bar/ui';
import Profile from '@/react/widgets/profile/ui';
import Pagination from '@/react/widgets/pagination/ui';
import Autosave from '@/react/widgets/autosave/ui';
import Carcas from '@/react/components/containers/carcas';

export default function ProfilePage() {

  const [step, setStep] = useState('Profile')

  const nextStep = () => {

    step === 'Profile' && setStep('Services')

  }

  return (

    <main id = {``} className = {``}>

      <Carcas

        authorized = { true }

      >

        <div className = { `flex flex-column` }>

          <ProgressBar />
          <Profile step = { step }/>
          <Autosave />
          <Pagination nextStep = { nextStep }/>

        </div>

      </Carcas>

    </main>

  );

}