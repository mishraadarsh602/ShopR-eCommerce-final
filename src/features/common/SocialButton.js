import { Link } from 'react-router-dom'

const SocialButton = ({socialClass,url}) => {
  return (
    
            <Link className={socialClass} to={url} ></Link> 
  )
}

export default SocialButton;