import { useState, useEffect } from 'react';
import s from './progress.bar.module.scss';
import ProgressBarIndicatorPoor
  from "@/react/components/icons/progress.bar.indicator.poor";
import ProgressBarIndicatorInProgress
  from "@/react/components/icons/progress.bar.indicator.in.progress";

const ProgressBar = ( {
                        photos = [],
                        textareas = [],
                        cardCount = 0,
                        type
                      } ) => {

  const [ progress, setProgress ] = useState( 0 )

  const maxPhotos = 5
  const maxTextareas = 4
  const maxTextareaLength = 320
  const maxCards = 5

  useEffect( () => {

    calculateProgress()

  }, [ photos, textareas, cardCount ] )

  const calculateProgress = () => {

    if ( type === 'publications' ) {

      let cardProgress = ( cardCount / maxCards ) * 100
      setProgress( Math.min( cardProgress, 97 ) )

    } else {

      let photoCount = photos.length
      let totalSymbols = 0

      textareas.forEach( textarea => {

        if ( textarea.length > 0 ) {

          totalSymbols += textarea.length

        }

      } );

      let photoProgress = Math.min( photoCount, maxPhotos ) * 4
      let symbolProgress = Math.min( totalSymbols, maxTextareas * maxTextareaLength ) * 0.0625

      setProgress( Math.min( photoProgress + symbolProgress, 97 ) )

    }

  }

  const getMessage = () => {

    if ( progress === 0 ) {

      return 'Начните заполнять поля'

    } else if ( progress < 30 && progress > 0) {

      return 'Хотелось бы узнать больше...'

    }
    else if ( progress > 30  ) {

      return 'У вас отлично получается, продолжайте!'

    }

  }

  return (

    <div>

      <div className={ s.progressContainer }>

        <div className={ s.progressContainer__progressBar }
             style={ { width: `${ progress }%` } }></div>

        <div style={ { left: `${ progress }%` } }
             className = {`${s.progressContainer__progressIndicator}`}>

          { progress <= 30

            ? <ProgressBarIndicatorPoor/>
            : <ProgressBarIndicatorInProgress/>

          }

        </div>


      </div>

      <div className={ `text-13 ${ s.message }` }>

        { getMessage() }

      </div>

    </div>

  )

}


export default ProgressBar