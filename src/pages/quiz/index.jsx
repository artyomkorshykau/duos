import useGlobal from "@/store";
import Quiz from "@/react/widgets/quiz/ui";
import {useQuiz} from "@/react/widgets/quiz/model";
import Carcas from '@/react/components/containers/carcas';

export default function QuizPage() {

  const [ globalState, globalActions ] = useGlobal();

  const {

    buttonTitle,
    handleButtonAction,
    status

  } = useQuiz()


  return (

    <main id={``} className={``}>

      <Carcas

        authorized={true}

      >

        <Quiz

          buttonTitle = { buttonTitle }
          handleButtonAction = { handleButtonAction }
          status = { status }

        />

      </Carcas>

    </main>

  );

}