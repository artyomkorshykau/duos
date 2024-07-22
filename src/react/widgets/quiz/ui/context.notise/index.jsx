import s from "@/react/widgets/quiz/ui/quiz.module.scss";
import NotiseInfo from "@/react/components/icons/notise.info";

const ContextNotise = ({

  status

}) => {

  if ( status === 'begin' ) {

    return (

      <div className = {`${ s.questionnaire__context_notise }`}>

        <NotiseInfo fill = { '#18009E' }/>
        <p className = {`${ s.questionnaire__context_notise__title }`}>{ `Все поля являются обязательными.` }</p>

      </div>

    )

  }

}

export default ContextNotise