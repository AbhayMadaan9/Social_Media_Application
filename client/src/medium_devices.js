import {css} from 'styled-components'
export const medium_devices = (props)=>{
return css`
@media only screen and (max-width: 1220px){
    ${props}
}
`
}