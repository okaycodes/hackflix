import {NotFound, Header} from "./../components"
import * as ROUTES from "./../constants/routes"


export default function NotFoundPage(){
    return(
        <>
            <NotFound.Global />
            <Header bg={false}>
                <Header.Frame backgroundColor="black">
                    <Header.Logo src="./../../images/misc/logo.svg" alt="Netflix" />
                </Header.Frame>
                <NotFound>
                    <NotFound.Title>Lost your way?</NotFound.Title>
                    <NotFound.Text>
                        Sorry, we can't find that page. You'll find lots to explore on 
                        the home page.
                    </NotFound.Text>
                    <NotFound.Button to={ROUTES.HOME}>Netflix Home</NotFound.Button>
                    <NotFound.Text borderleft="2px solid #e50914">
                        Error Code <span>NSES - 404</span>
                    </NotFound.Text>
                </NotFound>
            </Header>
            
        
        </>  
    )
}