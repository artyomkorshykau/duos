import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials";
import FAKEDATA from "@/store/states/user";

export const authOptions = {

  providers: [

    Credentials({

      credentials: {

        phone: { label: 'phone', type: 'number' }

      },

      async authorize( credentials ) {

        if( !credentials?.phone ) return null

        const currentUser = FAKEDATA.find( user => user.phone === credentials.phone )

        if( currentUser ) {

          const { password, ...userWithoutPass } = currentUser

          return userWithoutPass

        }

        return null

      }

    })

  ]

}
export default NextAuth(authOptions)