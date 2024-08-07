import Quiz from "@/react/widgets/quiz/ui";
import Carcas from '@/react/components/containers/carcas';

export default function QuizPage() {

  return (

    <main id={``} className={``}>

      <Carcas

        authorized = { true }

      >

        <Quiz/>

      </Carcas>

    </main>

  );

}