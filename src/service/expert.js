import { BASE_URL } from "@/constants/urls.js";
import { getCookie } from "@/scripts/helpers/get.token.js";
import { headers } from "@/service/headers.js";
import { format } from 'date-fns';

const expert = {

    async getExpert() {

      const token = getCookie('token')
  
      const response = await fetch(`${BASE_URL}/expert`, {
  
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` }
  
      })
  
      const data = await response.json();
  
      return data
  
    },
  
    async sendExpertDataStep1(profile) {
       
        const updatedProfile = {
            first_name: profile.firstName,
            mid_name: profile.surName,
            last_name: profile.lastName,
            birthday: profile.birthDate && format(new Date(profile.birthDate), 'yyyy-MM-dd'),
            gender: profile.gender,
            pseudonym: profile.nickName,
            tax_status: profile.taxStatus,
            tax_name: profile.taxName,
            tax_inn: profile.taxIIN,
            country_id: profile.country?.id,
            city_id: profile.city?.id,
            email: profile.email,
            is_temp: true
    
          };

          if (profile.phoneNumber) {
            updatedProfile.phone = parseInt(profile.phoneNumber.toString().replace(/\D/g, ''));
          }
  
      const response = await fetch(`${BASE_URL}/expert/step1`, {
  
        method: 'POST',
        headers: headers,
        body: JSON.stringify(updatedProfile)
  
      })
  
      const data = await response.json();
  
      return data
  
    },

    async sendExpertDataStep3(school) {
       
        const updatedProfile = {

            name: school.schoolName,
            comment: school.comment,
            is_temp: 1,

          }

          if (school.courses) {

            const filteredCourses = school.courses
              .filter((item) => item.name !== '')
              .map((item) => ({
                name: item.name,
                comment: item.comment,
              }));

              if (filteredCourses.length > 0) {
                updatedProfile.expert_course = filteredCourses;
              }

          }
  
      const response = await fetch(`${BASE_URL}/expert/step3`, {
  
        method: 'POST',
        headers: headers,
        body: JSON.stringify(updatedProfile)
  
      })
  
      const data = await response.json();
  
      return data
  
    },
  
  }
  
  export default expert