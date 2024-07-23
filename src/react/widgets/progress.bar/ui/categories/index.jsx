import s from '../progress.bar.module.scss'
import useGlobal from '@/store';
import NotiseSuccess from '@/react/components/icons/notise.success';

const Categories = () => {

  const [ globalState ] = useGlobal()

  return (

    <div className = {`${ s.progressBar__steps }`}>

      { globalState.quizData.map(category => {

        return (

          <div className = {`relative ${ s.progressBar__steps__item }`} key = {category.id}>

            <p className = {`text-16 ${ s.progressBar__steps__item__title }`}>

              { category.title }

            </p>

            <div className = {`${ s.progressBar__steps__item__icon }`}>

              <NotiseSuccess fill = { category.id === 1 ? '#E1EBF9' : 'white' }/>

            </div>

          </div>

        )

      })}

    </div>
  )

}

export default Categories