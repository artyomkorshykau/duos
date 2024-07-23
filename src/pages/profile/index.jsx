import Header from "@/react/components/containers/carcas/header";
import useGlobal from "@/store";
import Quiz from "@/react/widgets/quiz/ui";
import {useQuiz} from "@/react/widgets/quiz/model";
import ProgressBar from '@/react/widgets/progress.bar/ui';
import Profile from '@/react/widgets/profile/ui';
import Pagination from '@/react/widgets/pagination/ui';
import Autosave from '@/react/widgets/autosave/ui';

export default function QuizPage() {

  const [ globalState ] = useGlobal();

  const {

    status

  } = useQuiz()


  return (

    <main id={``} className={`flex justify-center items-start h-screen`}>

      <Header

        authorized = { true }
        userData = { globalState.userData }
        status = { status }

      />

      <div className={`flex flex-column mt-32`}>

        <ProgressBar/>
        <Profile/>
        <Pagination/>
        <Autosave/>

      </div>


    </main>

  );

}