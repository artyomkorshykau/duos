import ProgressBar from '@/react/widgets/progress.bar/ui';
import Profile from '@/react/widgets/profile/ui';
import Pagination from '@/react/widgets/pagination/ui';
import Autosave from '@/react/widgets/autosave/ui';
import Carcas from '@/react/components/containers/carcas';

export default function ProfilePage() {

  return (

    <main id={``} className={``}>

      <Carcas

        authorized={true}

      >

        <div className={`flex flex-column`}>

          <ProgressBar />
          <Profile />
          <Autosave />
          <Pagination />

        </div>

      </Carcas>

    </main>

  );

}