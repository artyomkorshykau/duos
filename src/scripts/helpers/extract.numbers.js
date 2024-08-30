export const extractNumbers = value => value.replace( /\D/g, '' )

export const formatPhoneNumber = phoneNumber => phoneNumber.replace( /(\d)(\d{3})(\d{3})(\d{2})(\d{2})/, '+$1 ($2) $3-$4-$5' )

export const formatPhoneNumberForHeader = phoneNumber => phoneNumber.replace( /(\d)(\d{3})(\d{3})(\d{2})(\d{2})/, '+$1 $2 $3-$4-$5' )

