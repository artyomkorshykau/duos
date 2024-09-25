import s from '@/react/widgets/section.header/ui/section.header.module.scss'
import DefaultButton from '@/react/components/buttons/default.button/index.jsx'
import cssIf from '@/scripts/helpers/css.if.js'

const Tabs = ( props ) => {
  
  const {
    
    activeTab,
    setActiveTab,
    tabs,
    className,
    classNameContent
    
  } = props
  
  return (
    
    <div className={ `${ s.header__tabs } ${ className }` }>
      
      { tabs?.map( ( tab ) => {
        
        return (
          
          <DefaultButton
            
            name={ tab.title }
            className={ `text-14
            ${ s.header__tabs__button }
            ${ cssIf( activeTab === tab.title, s.header__tabs__button__active ) }` }
            action={ ( e ) => {
              
              e.stopPropagation()
              setActiveTab( tab.title )
              
            } }
          
          >
            
            <div
              className={ `${ s.header__tabs__button__content } ${ classNameContent }` }>{ tab.content }</div>
          
          </DefaultButton>
        
        )
        
      } ) }
    
    </div>
  
  )
  
}

export default Tabs