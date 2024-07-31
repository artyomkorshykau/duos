import s from './progress.bar.module.scss'
import Breadcrumbs from '@/react/widgets/progress.bar/ui/breadcrumbs';
import Description from '@/react/widgets/progress.bar/ui/description';
import Title from '@/react/widgets/progress.bar/ui/title';
import Categories from '@/react/widgets/progress.bar/ui/categories';

const ProgressBar = ( props ) => {

  const {

    title,
    description,
    activeStep

  } = props

  return (

    <div className = {`${ s.progressBar }`}>

      <Breadcrumbs/>
      <Title title = { title }/>
      <Description description = { description }/>
      <Categories activeStep = { activeStep }/>

    </div>

  )

}

export default ProgressBar