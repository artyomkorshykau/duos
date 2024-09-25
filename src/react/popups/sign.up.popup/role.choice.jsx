import s from './sign.up.module.scss'
import DefaultButton from '@/react/components/buttons/default.button/index.jsx'
import { useRouter } from 'next/navigation'

const RoleChoice = ( {
                       
                       close = () => {}
                       
                     } ) => {
  
  const { push } = useRouter()
  
  return (
    
    <div className={ s.rolechoice }>
      
      <p className={ `font-bold text-40 ${ s.rolechoice__title }` }>В какой роли
        вы хотите <br/>зарегистрироваться?</p>
      
      <div className="flex justify-center gap-24">
        
        <div
          className={ `flex flex-col item-center ${ s.rolechoice__card } relative` }>
          
          <img src="/img/roles/client.jpg"
               className={ s.rolechoice__card__image }/>
          
          <div className={ `absolute ${ s.rolechoice__card__textspace }` }>
            
            <p
              className={ `font-bold text-26 ${ s.rolechoice__card__textspace__title }` }>Клиент</p>
            
            <p
              className={ `font-semibold text-13 ${ s.rolechoice__card__textspace__text }` }>Откройте
              еще больше <br/>уникального контента для <br/>вашего саморазвития
            </p>
            
            <DefaultButton
              
              className={ `flex items-center justify-center font-semibold text-14 ${ s.rolechoice__card__textspace__button }` }
              gray
              name={ 'Зарегистрироваться' }
              disabled
            
            />
          
          </div>
        
        </div>
        
        <div
          className={ `flex flex-col item-center ${ s.rolechoice__card } relative` }>
          
          <img src="/img/roles/expert.jpg"
               className={ s.rolechoice__card__image }/>
          
          <div className={ `absolute ${ s.rolechoice__card__textspace }` }>
            
            <p
              className={ `font-bold text-26 ${ s.rolechoice__card__textspace__title }` }>Эксперт</p>
            
            <p
              className={ `font-semibold text-13 ${ s.rolechoice__card__textspace__text }` }>Заполните
              анкету и получите <br/>возможность делиться своими <br/>знаниями и
              опытом с людьми</p>
            
            <DefaultButton
              
              className={ `flex items-center justify-center font-semibold text-14 ${ s.rolechoice__card__textspace__button }` }
              gray
              name={ 'Заполнить анкету' }
              action={ () => push( '/questionnaire' ) }
            
            />
          
          </div>
        
        </div>
      
      </div>
    
    </div>
  
  )
  
}

export default RoleChoice