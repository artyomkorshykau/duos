import Link from "next/link";
import s from "./sign.up.module.scss";

const RoleChoice = ({
  
  close = () => {}

}) => {

  return (

    <div className = { s.rolechoice }>

      <p className = {`font-bold text-40 ${ s.rolechoice__title }`}>В какой роли вы хотите <br />зарегистрироваться?</p>

      <div className = "flex justify-center">

        <div className = {`flex flex-col item-center ${ s.rolechoice__card } relative`}>

          <img src = "/img/roles/client.jpg"  className = { s.rolechoice__card__image }/>

          <div className = {`absolute ${ s.rolechoice__card__textspace }`}>

            <p className = {`font-bold text-26 ${ s.rolechoice__card__textspace__title }`}>Клиент</p>

            <p className = {`font-semibold text-13 ${ s.rolechoice__card__textspace__text }`}>Откройте еще больше <br />уникального контента для <br />вашего саморазвития</p>

            <div
            
              onClick = { () => close }
              className = {`flex items-center justify-center font-semibold text-14 ${ s.rolechoice__card__textspace__button } pointer`}
              
            >

              Зарегистрироваться
              
            </div>

          </div>

        </div>

        <div className = {`flex flex-col item-center ${ s.rolechoice__card } relative`}>

          <img src = "/img/roles/expert.jpg"  className = { s.rolechoice__card__image }/>

          <div className = {`absolute ${ s.rolechoice__card__textspace }`}>

            <p className = {`font-bold text-26 ${ s.rolechoice__card__textspace__title }`}>Эксперт</p>

            <p className = {`font-semibold text-13 ${ s.rolechoice__card__textspace__text }`}>Заполните анкету и получите <br />возможность делиться своими <br />знаниями и опытом с людьми</p>

            <Link href = "/questionnaire">

              <div
              
                className = {`flex items-center justify-center font-semibold text-14 ${ s.rolechoice__card__textspace__button } pointer`}
                
              >

                Заполнить анкету
                
              </div>

            </Link>

          </div>

        </div>

      </div>

    </div>

  )

}

export default RoleChoice;