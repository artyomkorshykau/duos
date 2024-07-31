import s from './profile.module.scss'
import { useMemo } from 'react';
import FullName from '@/react/widgets/profile/ui/full.name/ui';
import Nickname from '@/react/widgets/profile/ui/nickname/ui';
import TaxStatus from '@/react/widgets/profile/ui/tax.status/ui';
import Location from '@/react/widgets/profile/ui/location/ui';
import Contacts from '@/react/widgets/profile/ui/contacts/ui';
import CompletedDirections from '../../completed.directions';
import AddDirection from '../../add.direction';
import Accordion from '../../accordion';

const service_category = [

  {

    title: "Направление №1",
    description: "Выберите направление ниже или предложите свое, затем заполните услуги в рамках конкретно этого направления",
    isDelete: true,
    status: "NotFilled",
    services: [
    
      {

        title: 'Услуга №1',
        status: "New",
        isDelete: true,

      }

    ]

  },
  {

    title: "Психология",
    description: "Выберите направление ниже или предложите свое, затем заполните услуги в рамках конкретно этого направления",
    isDelete: true,
    status: "NotFilled",
    services: [
    
      {
        title: 'Услуга №1',
        status: "New",
        isDelete: true,
        id: 0,
      },
      {
        title: 'Услуга №1',
        status: "New",
        isDelete: true,
        id: 1,
      },
      {
        title: 'Оказание психологической помощи',
        status: "NotFinished",
        isDelete: true,
        id: 2,
      },
      {
        title: 'Прием у психотерапевта',
        status: "Filled",
        isDelete: true,
        id: 3,
      }

    ]

  }

]

const Profile = ({

  step

}) => {

  const content = useMemo(() => {

    if (step === 'Profile') {

      return (

        <div className = {`${ s.profile }`}>

          <FullName/>
          <Nickname/>
          <TaxStatus/>
          <Location/>
          <Contacts/>

        </div>

      )

    }
    if (step === 'Services') {

      return (

        <div className = {`${ s.wrapper }`}>
          
          <CompletedDirections />

          {service_category.map(( category, i ) => (

            <Accordion
            
              key = { i }
              category = { category }
              i = { i }
            
            />
            
          ))}

          <AddDirection/>

        </div>
      )

    }

  }, [ step ])

  return (

    content

  )

}

export default Profile