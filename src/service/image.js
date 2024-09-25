import { BASE_URL } from '@/constants/urls.js'
import { getFileHeaders } from '@/service/headers.js'

export const postImage = async (image, name) => {

  if ( !image ) {
    return
  }

  const mimeType = image.match( /data:(.*?);base64,/ )[ 1 ];
  const byteString = atob( image.split( ',' )[ 1 ] );
  const arrayBuffer = new ArrayBuffer( byteString.length );
  const uint8Array = new Uint8Array( arrayBuffer );

  for ( let i = 0; i < byteString.length; i++ ) {

    uint8Array[ i ] = byteString.charCodeAt( i );

  }

  const blob = new Blob( [ uint8Array ], { type: mimeType } );
  const [_, extension] = mimeType.split('/');
  const fileExtension = extension === 'jpeg' ? 'jpg' : extension;

  const formData = new FormData();

  formData.append( 'image', blob, `image.${fileExtension}` );

  if ( name ) {

    formData.append( 'name', name );

  } else {

    formData.append( 'name', null );

  }

  const response = await fetch( `${BASE_URL}/image/upload`, {

    method: 'POST',
    headers: getFileHeaders(),
    body: formData

  } );

  return await response.json();

}
