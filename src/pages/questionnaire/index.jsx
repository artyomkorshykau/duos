import Questionnaire from "@/react/features/questionnaire/ui";
import Header from "@/react/components/containers/carcas/header";
import useGlobal from "@/store";

export default function QuestionnairePage() {

  const [ globalState, globalActions ] = useGlobal();

  return (

    <main id={``} className={`flex justify-center items-center h-screen`}>


        <Header

          authorized={true}
          userData={globalState.userData}

        />


      <Questionnaire/>

    </main>


  );

}