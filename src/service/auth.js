import { instance } from "@/service/axios";

class auth {

  register( phone ) {

    return instance.post( `/sign`, { phone } )

  }

  getExpertsList() {

    return instance.get( '/admin/experts' )

  }

  getUserList() {

    return instance.get( '/admin/user' )

  }

}

export default new auth()