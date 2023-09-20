import {
  Container,
  NotErrorOps,
  NotErrorText,
  NotErrorTitle,
  NotFoundImage, NotFoundImageWrapper,
  NotFoundText,
  NotFountWrapper,
  NotBtnLink,
} from './style.js'
import {NavLink} from "react-router-dom";
import notFoundImg from '../../assets/img/not-found-img.svg';
function NotFound() {
  return (
      <>
        <Container className="container">
          <NotFountWrapper>
            <NotFoundText>
              <NotErrorText>
                Error 404
              </NotErrorText>
              <NotErrorOps>
                Oops! page not found
              </NotErrorOps>
              <NotErrorTitle>
                Something went wrong. It’s look that your requested could not be found. It's look like the link is
                broken or the page is removed.
              </NotErrorTitle>
              <NotBtnLink $w={135} $bg="#FFEEE8" $cl="#FF6636">
                  <NavLink to={'/'}>
                    Go Back
                  </NavLink>
              </NotBtnLink>
            </NotFoundText>
            <NotFoundImageWrapper>
              <NotFoundImage src={notFoundImg}/>
            </NotFoundImageWrapper>
          </NotFountWrapper>
        </Container>
      </>
  );
}

export default NotFound;