import Header from "@/react/components/containers/carcas/header";
import useGlobal from "@/store";
import Quiz from "@/react/widgets/quiz/ui";
import {useQuiz} from "@/react/widgets/quiz/model";

export default function QuizPage() {

  const [ globalState, globalActions ] = useGlobal();

  const {

    buttonTitle,
    handleButtonAction,
    status

  } = useQuiz()


  return (

    <main id={``} className={`flex justify-center items-center h-screen`}>

        <Header

          authorized = { true }
          userData = { globalState.userData }
          status = { status }

        />

      <Quiz

        buttonTitle = { buttonTitle }
        handleButtonAction = { handleButtonAction }
        status = { status }

      />

    </main>

  );

}